import React from 'react'
import {
    addPost,
    onPostChange,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postsData,
    }
}


const MyPostsContainer = connect(mapStateToProps,{onPostChange, addPost})(MyPosts)

export default MyPostsContainer;