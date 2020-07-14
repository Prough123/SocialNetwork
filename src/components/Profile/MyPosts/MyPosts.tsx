import React from 'react'
import ModuleMyPosts from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileType} from "../Profile";
import {DispatchActionType, PostsDataProps, ProfilePageType} from "../../../redux/state";


type MyPostsTypeProps = {
    profilePage:ProfilePageType
    dispatch: (action: DispatchActionType) =>void
}

const MyPosts = (props: MyPostsTypeProps) => {


    let postsElements = props.profilePage.postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = () => {
        if (newPostElement.current) {

            props.dispatch({type: 'ADD-POST', })
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
            props.dispatch(action)
        }
    }

    return (
        <div className={ModuleMyPosts.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={ModuleMyPosts.posts}>
                {postsElements}
            </div>
        </div>
    )


}

export default MyPosts;