import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataProps, updateNewPostText} from "../../redux/state";


export type ProfileType = {
    addPost: (postMessage: string) => void
    postsData: Array<PostsDataProps>;
    updateNewPostText: (newText: string) => void
    newPostText: string
}


const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.newPostText} updateNewPostText={updateNewPostText} postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;