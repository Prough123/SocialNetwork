import {DispatchActionType, PostsDataProps, ProfilePageType} from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 36},
            {id: 2, message: 'Its my first post', likesCount: 344},
            {id: 3, message: 'How are you?', likesCount: 3},
            {id: 4, message: 'Lol', likesCount: 6},
            {id: 5, message: 'Kekeke', likesCount: 16},
            {id: 6, message: 'Sdasdasdad', likesCount: 32},
            {id: 7, message: 'asdadSADasdas ssdsd', likesCount: 136},
        ],
        newPostText: 'it-kamasutra.com'
    }

const profileReducer = (state: ProfilePageType = initialState, action: DispatchActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataProps = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            if (action.newText) {
                state.newPostText = action.newText

            }
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;



