import {DispatchActionType, PostsDataProps, ProfilePageType} from "./state";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: DispatchActionType) => {

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


export default profileReducer;



