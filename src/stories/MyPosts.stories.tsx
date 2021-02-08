import React from 'react';

import {ReduxStoreProviderDecorators} from "./decorators/ReduxStoreProviderDecorators";
import MyPostsContainer from "../components/Profile/MyPosts/MyPostsContainer";
import MyPosts from "../components/Profile/MyPosts/MyPosts";

export default {
    title: 'SocialNetwork/MyPosts',
    component: MyPosts,
    decorators: [ReduxStoreProviderDecorators]
}



export const MyPostsStorybook = (props:any) => {
    return(
        <MyPostsContainer />
    )
}
