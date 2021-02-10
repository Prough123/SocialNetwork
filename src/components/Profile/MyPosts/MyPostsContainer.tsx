import React from 'react'
import {addPost,} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.postsData,
    }
}


const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts)

export default MyPostsContainer;