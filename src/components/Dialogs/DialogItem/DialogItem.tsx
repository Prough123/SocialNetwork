import React from 'react'
import ModuleDialogs from './DialogItem.module.css'
import {NavLink} from "react-router-dom";



export type DialogItemProps = {
    id: number | string,
    name: string,
}


const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={ModuleDialogs.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
