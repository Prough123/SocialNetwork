import {RootStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {connect, ConnectedProps} from "react-redux";
import Users, {getUsersServerType} from "./Users";




let mapStateToProps = (state:RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsercCount: state.usersPage.totalUsercCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<getUsersServerType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsercCount: (users: number) => {
            dispatch(setTotalUsersCountAC(users))
        }
    }
}

const connector = connect(mapStateToProps,mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)


export default UsersContainer;