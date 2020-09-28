import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {updateNewPostTextActionCreator, setUserProfile, addPostActionCreator} from "../../redux/profile-reducer";


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
        mainLink:string
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile/>
            </div>
        )
    }
}


function mapStateToProps() {
        return {

        }
}

export default connect(mapStateToProps, {updateNewPostTextActionCreator,  setUserProfile, addPostActionCreator})(ProfileContainer);