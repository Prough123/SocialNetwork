import React from 'react'
import ModuleMyPosts from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    PostsDataProps,
    ProfilePageType,
} from "../../../redux/store";


type MyPostsTypeProps = {
    onPostChange: (text: string) => void
    addPost: () => void
    posts: Array<PostsDataProps>
    newPostText: string
}

const MyPosts = (props: MyPostsTypeProps) => {


    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.onPostChange(text)
        }
    }

    return (
        <div className={ModuleMyPosts.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
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