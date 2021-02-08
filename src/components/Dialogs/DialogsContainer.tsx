import React from 'react'
import {addMessageInDialogsActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";





let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}



let mapDispatchToProps = (dispatch:any) => {
    return {
        onAddMessage: (newMessageBody: string) => {
            dispatch(addMessageInDialogsActionCreator(newMessageBody))
        },
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)


export type PropsFromRedux = ConnectedProps<typeof connector>



export default compose<any>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);