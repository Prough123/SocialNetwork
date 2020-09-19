import React from 'react';

import {ReduxStoreProviderDecorators} from "./decorators/ReduxStoreProviderDecorators";
import DialogItem, {DialogItemProps} from "../components/Dialogs/DialogItem/DialogItem";


export default {
    title: 'SocialNetwork/DialogItem',
    component: DialogItem,
   decorators: [ReduxStoreProviderDecorators]
}

export const DialogStorybook = (props:any) => {
    return(
       <DialogItem id={'1'} name={'Kek'}/>
    )
}
