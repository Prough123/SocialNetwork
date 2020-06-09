import React from 'react'
import ModuleMyPosts from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={ModuleMyPosts.posts}>
                <Post message='Hi, how are you?' like='20'/>
                <Post message='Its my first post' like='15'/>
            </div>
        </div>
    )


}

export default MyPosts;