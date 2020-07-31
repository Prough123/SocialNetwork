import React from 'react';
import {RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UsersPropsType, UsersType} from "../../redux/store";
import {connect} from "react-redux";
import Users from "./Users";



let mapStateToProps = (state:RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)


export default UsersContainer;