import React from 'react'
import {addMessageInDialogsActionCreator, updateNewMessageInDialogsActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


let mapDispatchToProps = (dispatch:any) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageInDialogsActionCreator())
        },
        onChangeMessage: (body: string) => {
            dispatch(updateNewMessageInDialogsActionCreator(body))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)


export type PropsFromRedux = ConnectedProps<typeof connector>


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;