import React from 'react'
import ModuleDialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {v1} from "uuid";
import {PropsFromRedux} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50)

const Dialogs = (props: PropsFromRedux) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map(el => <DialogItem key={v1()} id={el.id} name={el.name}/>)
    let messageElements = state.messagesData.map(el => <Message key={v1()} message={el.message}/>)


    const addNewMessage = (values:any) => {
        props.onAddMessage(values.newMessageBody)
    }


    return (
        <div className={ModuleDialogs.dialogs}>
            <div className={ModuleDialogs.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={ModuleDialogs.messages}>
                {messageElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}


const AddMessageForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter your message' validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>x</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;