import React from 'react'
import {v1} from "uuid";
import UsersModuleCss from "./Users.module.css"
import userPhoto from '../../assets/images/user.png'
import {getUsersServerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


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
                                        usersAPI.unFollow(el.id)
                                            .then(data => {
                                                if(data.resultCode === 0){
                                                    props.unFollow(el.id);
                                                }
                                            })
                                    }}>Unfollow</div>
                                    : <div onClick={() => {
                                       usersAPI.follow(el.id)
                                            .then(data => {
                                                if(data.resultCode === 0){
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