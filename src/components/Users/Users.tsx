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



class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsercCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber:number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            let data = response.data.items
            this.props.setUsers(data)
        })
        this.props.setCurrentPage(pageNumber)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsercCount / this.props.pageSize)
        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map((p) => <span onClick={(event) => {this.onPageChanged(p)}} className={this.props.currentPage === p ? UsersModuleCss.selected: ''}>{p}</span>)}
            </div>
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