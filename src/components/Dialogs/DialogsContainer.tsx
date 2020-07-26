import React from 'react'
import {addMessageInDialogsActionCreator, updateNewMessageInDialogsActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";




let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
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


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;