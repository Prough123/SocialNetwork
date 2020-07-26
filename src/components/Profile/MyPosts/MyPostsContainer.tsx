import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store:any) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())

                    }

                    let onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))

                    }

                    let state= store.getState()
                    return  (<MyPosts newPostText={state.profilePage.newPostText}
                                     posts={state.profilePage.postsData}
                                     addPost={addPost}
                                     onPostChange={onPostChange}/>)
            }
            }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;