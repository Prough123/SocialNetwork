import React from 'react'
import ModuleMyPosts from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";





const MyPosts = (props:ProfilePageType) => {


    let postsElements = props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)
    return (
        <div className={ModuleMyPosts.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>

                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={ModuleMyPosts.posts}>
                {postsElements}
            </div>
        </div>
    )


}

export default MyPosts;