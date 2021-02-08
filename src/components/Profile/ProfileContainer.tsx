import React from 'react';
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withRouter, Redirect, RouteComponentProps} from 'react-router-dom';
import {getStatus, getUserProfile, setStatus, updateStatus} from "../../redux/profile-reducer";
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
            userId = '9308'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

function mapStateToProps(state: RootStateType) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const connector = connect(mapStateToProps, {getUserProfile,getStatus,updateStatus})

export type PropsFromRedux = ConnectedProps<typeof connector>


export default compose<any>(
    withRouter,
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus})
)(ProfileContainer)

