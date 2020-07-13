import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {PostsDataProps} from "../../redux/state";


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
            <MyPosts newPostText={store.getState().profilePage.newPostText} updateNewPostText={store.updateNewPostText} postsData={store._state.profilePage.postsData} addPost={store.addPost}/>
        </div>
    )
}

export default Profile;