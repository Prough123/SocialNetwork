import React from 'react'
import ModuleDialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    DialogpageType,
    DialogsDataProps, MessageDataProps,
} from "../../redux/store";


type ActionTypeProps = {
    dialogsPage: DialogpageType
    onAddMessage: () => void
    onChangeMessage: (body: string) => void
}

const Dialogs = (props: ActionTypeProps) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(el => <DialogItem id={el.id} name={el.name}/>)
    let messageElements = state.messagesData.map(el => <Message message={el.message}/>)
    let newMessageBody = state.newMessageText

    const addMessage = () => {
        props.onAddMessage()
    }


    const onChangeMessage = (e: React.FormEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.onChangeMessage(body)
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