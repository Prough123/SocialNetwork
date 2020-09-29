import { PostsDataProps, ProfilePageType} from "./store";
import {v1} from "uuid";
import {getProfileType} from "../components/Profile/ProfileContainer";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 36},
        {id: v1(), message: 'Its my first post', likesCount: 344},
        {id: v1(), message: 'How are you?', likesCount: 3},
        {id: v1(), message: 'Lol', likesCount: 6},
        {id: v1(), message: 'Kekeke', likesCount: 16},
        {id: v1(), message: 'Sdasdasdad', likesCount: 32},
        {id: v1(), message: 'asdadSADasdas ssdsd', likesCount: 136},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null as null | getProfileType
}
type initialStateType = typeof initialState

type ActionsTypes = addPostACType | updateNewPostTextACType | setUserProfileACType

const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsDataProps = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state, postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            if (action.newText) {
                return {...state, newPostText: action.newText}
            }
            return state
        }
        case SET_USER_PROFILE: {
            return {...state, profile:action.profile}
        }

        default:
            return state
    }

}

export const  addPost = (): addPostACType => ({type: ADD_POST})
export type addPostACType = {
    type: typeof ADD_POST
}


export const onPostChange = (text: string): updateNewPostTextACType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export type updateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}


export const setUserProfile = (profile: getProfileType):setUserProfileACType => ({
    type: SET_USER_PROFILE,
    profile
})

export type setUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: getProfileType
}


export default profileReducer;



