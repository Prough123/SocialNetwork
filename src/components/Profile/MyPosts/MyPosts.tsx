import React, {RefObject} from 'react'
import ModuleMyPosts from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileType} from "../Profile";





const MyPosts = (props:ProfileType) => {


    let postsElements = props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
        }

    }
    return (
        <div className={ModuleMyPosts.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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