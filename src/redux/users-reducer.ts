import {DispatchActionType, UsersPropsType} from "./store";
import {v1} from "uuid";
import {getUsersServerType} from "../components/Users/Users";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let  initialState = {
    users: [
        {
            name: 'Valera',
            id: 1,
            uniqueUrlName: 'adasd',
            photos: {
                small: "",
                large: "",
            },
            status: "",
            followed: false
        }
    ] as Array<getUsersServerType>
}

export type initialStateType = typeof initialState
export type ActionsTypes = SetUsersACType

const usersReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})

export type SetUsersACType = {
    type: typeof SET_USERS,
    users: Array<getUsersServerType>
}

export const setUsersAC = (users: Array<getUsersServerType>): SetUsersACType => ({type: SET_USERS, users})

export default usersReducer;



