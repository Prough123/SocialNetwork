import React from 'react'
import ModuleMyPosts from './Post.module.css'



type PostProps = {
    message: string,
    likesCount:number | string
}

const Post = (props:PostProps) => {
    return (


        <div className={ModuleMyPosts.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQihpPg13UyFBVFKfGbZZRuvrtGtiuCPKS9Gh84AxMmmsItool2&usqp=CAU"
                alt=""/>
            {props.message}
            <div><span>{props.likesCount}</span></div>

        </div>

    )
}
export default Post;