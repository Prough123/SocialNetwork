import React from 'react'
import ModuleDialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogpageType} from "../../redux/state";


type ActionTypeProps={
    state: DialogpageType
}

const Dialogs = (props: ActionTypeProps) => {


    let dialogsElements = props.state.dialogsData.map(el => <DialogItem id={el.id} name={el.name}/> )
    let messageElements = props.state.messagesData.map(el =>  <Message message={el.message}/>)


    let addMessageinDialogs = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        alert(addMessageinDialogs.current?.value) }

    return (
        <div className={ModuleDialogs.dialogs}>
            <div className={ModuleDialogs.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={ModuleDialogs.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={addMessageinDialogs}></textarea>
                <button onClick={addMessage}>x</button>
            </div>
        </div>
    )
}

export default Dialogs;