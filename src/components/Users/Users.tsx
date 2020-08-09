import React from 'react';
import {UsersType} from "../../redux/store";
import UsersModuleCss from "./Users.module.css"
import {v1} from "uuid";
import  axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import {PropsFromRedux} from "./UsersContainer";

type UsersPropsType  = PropsFromRedux & {
    // users: Array<getUsersServerType>
    // unFollow: (userId: number) => void
    // follow: (userId: number) => void
    // setUsers: (users: Array<getUsersServerType>) => void
}

export type getUsersServerType = {
    name: string
    id: number
    uniqueUrlName: string,
    photos: {
        small: string
        large: string
    }
    status: string,
    followed: boolean
}


let Users = (props: UsersPropsType) => {

    if (props.users.length <= 5) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            let data = response.data.items
            props.setUsers(data)
        })
    }

    return <div>
        {
            props.users.map(el => <div key={v1()}>
                <span>
                    <div>
                        <img className={UsersModuleCss.userPhoto} src={el.photos.small != null ? el.photos.small : userPhoto} alt="avatar"/>
                    </div>
                    <div>
                        <button>
                            {
                                el.followed
                                    ? <div onClick={() => {
                                        props.unFollow(el.id)
                                    }}>Unfollow</div>
                                    : <div onClick={() => {
                                        props.follow(el.id)
                                    }}>follow</div>
                            }
                        </button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;