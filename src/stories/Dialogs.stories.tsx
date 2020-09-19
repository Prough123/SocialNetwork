import React from 'react';
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import {ReduxStoreProviderDecorators} from "./decorators/ReduxStoreProviderDecorators";


export default {
    title: 'SocialNetwork/Dialogs',
    component: DialogsContainer,
    decorators: [ReduxStoreProviderDecorators]
}

export const DialogsStorybook = (props:any) => {
    return(
        <DialogsContainer/>
    )
}
