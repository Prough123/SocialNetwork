import {getUsersServerType} from "../components/Users/UsersContainer";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [] as Array<getUsersServerType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}
export type initialStateType = typeof initialState
export type ActionsTypes =
    SetUsersACType
    | unFollowACType
    | followACType
    | SetCurrentPageACType
    | SetTotalUsercCountType
    | SetToggleIsFetchingACType

const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
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
                ...state, users: [...action.users, ...state.users,]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.users
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const follow= (userId: number): followACType => ({type: FOLLOW, userId})

export type followACType = {
    type: typeof FOLLOW
    userId: number
}


export const unfollow = (userId: number): unFollowACType => ({type: UNFOLLOW, userId})

export type unFollowACType = {
    type: typeof UNFOLLOW
    userId: number
}


export const setUsers = (users: Array<getUsersServerType>): SetUsersACType => ({type: SET_USERS, users})
export type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<getUsersServerType>
}

export const setCurrentPage = (pageNumber: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, pageNumber})
export type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}

export const setTotalUsersCount = (users: number):SetTotalUsercCountType => ({type: SET_TOTAL_USERS_COUNT, users})
export type SetTotalUsercCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    users: number
}

export const setToggleIsFethcing= (isFetching:boolean):SetToggleIsFetchingACType => ({type: TOGGLE_IS_FETCHING , isFetching})

export type SetToggleIsFetchingACType = { type: typeof TOGGLE_IS_FETCHING, isFetching:boolean }

export default usersReducer;



