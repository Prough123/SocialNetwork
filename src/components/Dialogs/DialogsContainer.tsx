import React from 'react'
import {
    DialogpageType,
    RootStateType,
} from "../../redux/store";
import {addMessageInDialogsActionCreator, updateNewMessageInDialogsActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type ActionTypeProps = {
    store: any
}

const DialogsContainer = (props: ActionTypeProps) => {
    let state: DialogpageType = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMessageInDialogsActionCreator())
    }


    const onChangeMessage = (body: string) => {
        props.store.dispatch(updateNewMessageInDialogsActionCreator(body))
    }


    return (<Dialogs  dialogsPage={state} onAddMessage={addMessage}
                     onChangeMessage={onChangeMessage}/>)

}

export default DialogsContainer;