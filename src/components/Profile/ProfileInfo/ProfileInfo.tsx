import React from 'react';
import ModuleProfileInfo from './ProfileInfo.module.css'
import {ProfileType} from "../Profile";
import Preloader from "../../common/Preloader/Preloader";
import lookingForAJob from "../../../assets/images/6938.jpg"
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props: ProfileType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={ModuleProfileInfo.descriptionBlock}>
                <p>{props.profile.fullName}</p>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <p>{props.profile.aboutMe}</p>
                <div>
                    Контакты
                    <div><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
                    <div><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
                    <div><a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>
                    <div><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>
                    <div><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>
                    {props.profile.lookingForAJob ? <div><img src={lookingForAJob}/> <p>{props.profile.lookingForAJobDescription}</p> </div>: <span>не ищу</span>}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;