import React from 'react';
import ModuleProfile  from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (

        <div className={ModuleProfile.content}>
            <div><img
                src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                alt=""/></div>
            <div>Ava + descr</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;