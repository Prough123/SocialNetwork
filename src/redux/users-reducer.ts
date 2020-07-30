import {DispatchActionType, PostsDataProps, ProfilePageType, UsersPropsType} from "./store";
import {v1} from "uuid";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {id: v1(), followed: true, fullname: 'Dmitry', status: 'kek', location: {city: 'Minsk', country: 'Belarus'}},
        {
            id: v1(),
            followed: true,
            fullname: 'Ilya',
            status: 'жирный слюнтяй',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: false,
            fullname: 'Karina',
            status: 'Каришааааа',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {id: v1(), followed: true, fullname: 'Alex', status: 'kek', location: {city: 'Minsk', country: 'Belarus'}},
        {
            id: v1(),
            followed: false,
            fullname: 'Zhenya',
            status: 'Пидорас форсуночный',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: false,
            fullname: 'Sergey',
            status: 'C# and Python for геев',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {id: v1(), followed: true, fullname: 'Roma', status: 'lol', location: {city: 'Minsk', country: 'Belarus'}},

    ],
}

const usersReducer = (state: UsersPropsType = initialState, action: DispatchActionType) => {

    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            return
        case UNFOLLOW:
            return
        default:
            return state
    }

}

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})

export default usersReducer;



