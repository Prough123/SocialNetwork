import React from 'react'
import ModuleDialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    DialogpageType,
} from "../../redux/store";
import {v1} from "uuid";
import {PropsFromRedux} from "./DialogsContainer";
import { Redirect } from 'react-router-dom';


// type ActionTypeProps = {
//     dialogsPage: DialogpageType
//     onAddMessage: () => void
//     onChangeMessage: (body: string) => void
//     isAuth: boolean
// }

const Dialogs = (props: PropsFromRedux) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(el => <DialogItem key={v1()} id={el.id} name={el.name}/>)
    let messageElements = state.messagesData.map(el => <Message key={v1()} message={el.message}/>)
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