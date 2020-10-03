import React from 'react'
import {v1} from "uuid";
import UsersModuleCss from "./Users.module.css"
import userPhoto from '../../assets/images/user.png'
import {getUsersServerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersType = {
    usersCount: number
    pageSize: number
    users: Array<getUsersServerType>
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    onPageChanged: (pageNumber: number) => void

}

const Users = (props:UsersType) => {

    let pagesCount = Math.ceil(props.usersCount / props.pageSize)
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i)

    }
    return (
        <div>
            <div>
                {pages.map((p) => <span onClick={(event) => {props.onPageChanged(p)}} className={props.currentPage === p ? UsersModuleCss.selected: ''}>{p}</span>)}
            </div>
            {
                props.users.map(el => <div key={v1()}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                             <img className={UsersModuleCss.userPhoto}
                                  src={el.photos.small != null ? el.photos.small : userPhoto} alt="avatar"/>
                        </NavLink>
                    </div>
                    <div>
                        <button>
                            {
                                el.followed
                                    ? <div onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                            withCredentials:true,
                                            headers: {
                                                "API-KEY": "fa125444-29b8-4972-9c66-f923562d12f2"
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode === 0){
                                                    props.unFollow(el.id);
                                                }
                                            })
                                    }}>Unfollow</div>
                                    : <div onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},{
                                            withCredentials:true,
                                            headers: {
                                                "API-KEY": "fa125444-29b8-4972-9c66-f923562d12f2"
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode === 0){
                                                    props.unFollow(el.id);
                                                }
                                            })

                                       props.follow(el.id);
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
    )
}

export default Users;