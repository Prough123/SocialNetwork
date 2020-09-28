import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";




let mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;