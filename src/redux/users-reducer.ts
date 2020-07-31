import {DispatchActionType, PostsDataProps, ProfilePageType, UsersPropsType, UsersType} from "./store";
import {v1} from "uuid";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/9KokKdYosHiwu2EwedBf8TpE8i-TEHyeknIa8w/fzdgb-38AQk.jpg',
            followed: true,
            fullname: 'Dmitry',
            status: 'kek',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/9KokKdYosHiwu2EwedBf8TpE8i-TEHyeknIa8w/fzdgb-38AQk.jpg',
            followed: true,
            fullname: 'Ilya',
            status: 'жирный слюнтяй',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/9KokKdYosHiwu2EwedBf8TpE8i-TEHyeknIa8w/fzdgb-38AQk.jpg',
            followed: false,
            fullname: 'Karina',
            status: 'Каришааааа',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/9KokKdYosHiwu2EwedBf8TpE8i-TEHyeknIa8w/fzdgb-38AQk.jpg',
            followed: true,
            fullname: 'Alex',
            status: 'kek',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/9KokKdYosHiwu2EwedBf8TpE8i-TEHyeknIa8w/fzdgb-38AQk.jpg',
            followed: false,
            fullname: 'Zhenya',
            status: 'Пидорас форсуночный',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/9KokKdYosHiwu2EwedBf8TpE8i-TEHyeknIa8w/fzdgb-38AQk.jpg',
            followed: false,
            fullname: 'Sergey',
            status: 'C# and Python for геев',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/9KokKdYosHiwu2EwedBf8TpE8i-TEHyeknIa8w/fzdgb-38AQk.jpg',
            followed: true,
            fullname: 'Roma',
            status: 'lol',
            location: {city: 'Minsk', country: 'Belarus'}
        },

    ],
}

const usersReducer = (state: UsersPropsType = initialState, action: DispatchActionType) => {

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

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users})

export default usersReducer;



