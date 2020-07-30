import {DispatchActionType, PostsDataProps, ProfilePageType} from "./store";
import {v1} from "uuid";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
        newPostText: 'it-kamasutra.com'
    }

const profileReducer = (state: ProfilePageType = initialState, action: DispatchActionType) => {

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
                return {...state, newPostText:action.newText}
            }
            return state
        }

        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;



