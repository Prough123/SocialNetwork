import {RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {connect, ConnectedProps} from "react-redux";
import Users, {getUsersServerType} from "./Users";



let mapStateToProps = (state:RootStateType) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const connector = connect(mapStateToProps,mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)


export default UsersContainer;