import React from "react";
import axios from "axios";
import Users from "./Users";
import {RootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setToggleIsFethcing,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import {connect, ConnectedProps} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


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


class UsersContainer extends React.Component <PropsFromRedux> {

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFethcing(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFethcing(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFethcing(false)
                this.props.setUsers( data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unfollow}
                   users={this.props.users}
                   usersCount={this.props.totalUsercCount}
                   onPageChanged={this.onPageChanged}/>
        </>

    }
}


let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsercCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


const connector = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFethcing,
})

export type PropsFromRedux = ConnectedProps<typeof connector>



export default compose<any>(
    WithAuthRedirect,
    connect(mapStateToProps, {follow,unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFethcing,
    })
)(UsersContainer)




