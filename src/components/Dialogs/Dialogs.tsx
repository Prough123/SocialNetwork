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


    let createRefForMessage = React.createRef<HTMLTextAreaElement>();


    const addMessage = () => {
        if (createRefForMessage.current) {
            props.dispatch(addMessageInDialogsActionCreator())
        }
    }

    const onChangeMessage = () => {
        if (createRefForMessage.current) {
            let text = createRefForMessage.current.value
            props.dispatch(updateNewMessageInDialogsActionCreator(text))
        }
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
                <textarea onChange={onChangeMessage} value={props.state.newMessageText}
                          ref={createRefForMessage}/>
                <button onClick={addMessage}>x</button>
            </div>
        </div>
    )
}

export default Dialogs;