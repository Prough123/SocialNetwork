import React from 'react';
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withRouter, Redirect, RouteComponentProps} from 'react-router-dom';
import {getUserProfile} from "../../redux/profile-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type getProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullname: string
    userId: number
    photos: {
        small: string
        large: string
    }
}



type PropsType = PropsFromRedux  & RouteComponentProps<PathParamsType>


type PathParamsType = {
    userId: string
}


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

function mapStateToProps(state: RootStateType) {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth

    }
}

const connector = connect(mapStateToProps, {getUserProfile})

export type PropsFromRedux = ConnectedProps<typeof connector>


export default compose<any>(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile})
)(ProfileContainer)

