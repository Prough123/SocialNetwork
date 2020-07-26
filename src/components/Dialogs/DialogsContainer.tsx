import React from 'react'
import {
    DialogpageType,
    RootStateType,
} from "../../redux/store";
import {addMessageInDialogsActionCreator, updateNewMessageInDialogsActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: any) => {
                    let state: DialogpageType = store.getState().dialogsPage
                    const addMessage = () => {
                      store.dispatch(addMessageInDialogsActionCreator())
                    }


                    const onChangeMessage = (body: string) => {
                        store.dispatch(updateNewMessageInDialogsActionCreator(body))
                    }
                    return <Dialogs dialogsPage={state}
                                    onAddMessage={addMessage}
                                    onChangeMessage={onChangeMessage}/>
                }

            }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;