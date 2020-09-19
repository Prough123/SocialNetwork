import React from 'react';
import Message from "../components/Dialogs/Message/Message";


export default {
    title: 'SocialNetwork/Message',
    component: Message,
}

export const MessagesStorybook = (props:any) => {
    return(
        <Message message={'Hello Sipov'}/>
    )
}
