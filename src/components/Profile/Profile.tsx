import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import  {PostsDataProps} from "../../redux/state";


export type ProfileType = {
    addPost:(postMessage: string) => void
    postsData:  Array<PostsDataProps>;
}


const Profile = (props:ProfileType ) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;