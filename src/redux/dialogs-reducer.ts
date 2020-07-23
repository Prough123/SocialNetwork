import {DialogpageType, DispatchActionType, MessageDataProps} from "./state";


const ADD_MESSAGE_IN_DIALOGS = 'ADD_MESSAGE_IN_DIALOGS'
const UPDATE_NEW_MESSAGE_IN_DIALOGS = 'UPDATE_NEW_MESSAGE_IN_DIALOGS'

const dialogsReducer = (state: DialogpageType, action: DispatchActionType) => {

    switch (action.type) {
        case ADD_MESSAGE_IN_DIALOGS:
            let newMessage: MessageDataProps = {
                id: 5,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state

        case UPDATE_NEW_MESSAGE_IN_DIALOGS:
            if (action.newTextDialogs) {
                state.newMessageText = action.newTextDialogs
            }
            return state
        default:
            return state
    }
}

export default dialogsReducer;