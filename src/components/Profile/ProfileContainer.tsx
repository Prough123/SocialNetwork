import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/redux-store";
import { withRouter } from 'react-router-dom';


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


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}


function mapStateToProps(state: RootStateType) {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);