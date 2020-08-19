import React from 'react';
import {UsersType} from "../../redux/store";
import UsersModuleCss from "./Users.module.css"
import {v1} from "uuid";
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import {PropsFromRedux} from "./UsersContainer";

type UsersPropsType = PropsFromRedux & {
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

class Users extends React.Component<UsersPropsType, getUsersServerType> {
    getUsers = () => {
        if (this.props.users.length === 1) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                let data = response.data.items
                this.props.setUsers(data)
            })
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.users.map(el => <div key={v1()}>
                <span>
                    <div>
                        <img className={UsersModuleCss.userPhoto}
                             src={el.photos.small != null ? el.photos.small : userPhoto} alt="avatar"/>
                    </div>
                    <div>
                        <button>
                            {
                                el.followed
                                    ? <div onClick={() => {
                                        this.props.unFollow(el.id)
                                    }}>Unfollow</div>
                                    : <div onClick={() => {
                                       this. props.follow(el.id)
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
}

export default Users;