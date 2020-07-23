import React from 'react'
import ModuleDialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageInDialogsActionCreator,
    DialogpageType,
    DispatchActionType,
    updateNewMessageInDialogsActionCreator
} from "../../redux/state";


type ActionTypeProps = {
    state: DialogpageType
    dispatch: (action: DispatchActionType) => void
}

const Dialogs = (props: ActionTypeProps) => {


    let dialogsElements = props.state.dialogsData.map(el => <DialogItem id={el.id} name={el.name}/>)
    let messageElements = props.state.messagesData.map(el => <Message message={el.message}/>)
    let newMessageBody = props.state.newMessageText

    const addMessage = () => {
            props.dispatch(addMessageInDialogsActionCreator())
    }


    const onChangeMessage = (e: React.FormEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageInDialogsActionCreator(body))
    }


    return (
        <div className={ModuleDialogs.dialogs}>
            <div className={ModuleDialogs.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={ModuleDialogs.messages}>
                {messageElements}
            </div>
            <div>
                <div>
                       <textarea onChange={onChangeMessage} value={newMessageBody}
                                />
                </div>
                <div>
                    <button onClick={addMessage}>x</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;