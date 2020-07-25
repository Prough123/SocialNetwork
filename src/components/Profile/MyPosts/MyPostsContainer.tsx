import React from 'react'
import {
    DispatchActionType,

    ProfilePageType, RootStateType,
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsTypeProps = {
    store: any
}

const MyPostsContainer = (props: MyPostsTypeProps) => {

    let state: RootStateType = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))

    }

    return (<MyPosts newPostText={state.profilePage.newPostText}
                     posts={state.profilePage.postsData}
                     addPost={addPost}
                     onPostChange={onPostChange}/>)


}

export default MyPostsContainer;