import React from 'react'
import ModuleMyPosts from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    PostsDataProps,
} from "../../../redux/store";
import {v1} from "uuid";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsTypeProps = {
    onPostChange: (text: string) => void
    addPost: (newPostText:string) => void
    posts: Array<PostsDataProps>
}



const MyPosts = (props: MyPostsTypeProps) => {


    let postsElements = props.posts.map(el => <Post key={v1()} message={el.message} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = (values:any) => {
        props.addPost(values.addPost)
    }


    return (
        <div className={ModuleMyPosts.postsBlock}>
            <h3>My post</h3>
            <MyPostsReduxForm onSubmit={addPost}/>
            <div className={ModuleMyPosts.posts}>
                {postsElements}
            </div>
        </div>
    )
}




const MyPostsForm = (props: InjectedFormProps) => {
    return (
        <div className={ModuleMyPosts.postsBlock}>
            <h3>My post</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component="input" name="addPost" type="text"/>
                </div>
                <div>
                    <button >Add post</button>
                </div>
            </form>
        </div>
    )
}


const MyPostsReduxForm = reduxForm({
    form: 'addPost'
})(MyPostsForm)

export default MyPosts;
