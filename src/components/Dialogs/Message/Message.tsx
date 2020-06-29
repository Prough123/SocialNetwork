import React from 'react'
import ModuleDialogs from './Message.module.css'



type MessageProps = {
    message: string
}


const Message = (props: MessageProps) => {
    return <div className={ModuleDialogs.message}> {props.message}</div>
}

export default Message;