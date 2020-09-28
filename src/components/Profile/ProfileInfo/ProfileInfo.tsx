import React from 'react';
import ModuleProfileInfo from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div><img
                src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                alt=""/></div>
            <div className={ModuleProfileInfo.descriptionBlock}>Ava + descr</div>
        </div>
    )
}

export default ProfileInfo;