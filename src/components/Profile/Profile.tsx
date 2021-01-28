import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export type ProfileType = {
    profile: any
    status: string
    updateStatus:(status:string) => void
}


const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;