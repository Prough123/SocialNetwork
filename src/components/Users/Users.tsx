import React from 'react';
import {UsersType} from "../../redux/store";
import UsersModuleCss from "./Users.module.css"

type UsersPropsType = {
    users: Array<UsersType>
    unFollow: (userId: string) => void
    follow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
}

let Users = (props: UsersPropsType) => {
    return <div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={UsersModuleCss.userPhoto} src={el.photoUrl} alt=""/>
                    </div>
                    <div>
                        <button>
                            {
                                el.followed
                                    ? <div onClick={() => {props.follow(el.id)}}>follow</div>
                                    : <div onClick={() => {props.unFollow(el.id)}}>Unfollow</div>
                            }
                        </button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullname}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;