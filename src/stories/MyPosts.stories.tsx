import React from 'react';

import {ReduxStoreProviderDecorators} from "./decorators/ReduxStoreProviderDecorators";
import MyPosts from "../components/Profile/MyPosts/MyPosts";
import MyPostsContainer from "../components/Profile/MyPosts/MyPostsContainer";

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
