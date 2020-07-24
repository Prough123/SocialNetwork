import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType} from "../../redux/store";


export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: DispatchActionType) =>void
}


const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;