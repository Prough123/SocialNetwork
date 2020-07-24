import {DialogpageType, DispatchActionType, MessageDataProps} from "./store";


const ADD_MESSAGE_IN_DIALOGS = 'ADD_MESSAGE_IN_DIALOGS'
const UPDATE_NEW_MESSAGE_IN_DIALOGS = 'UPDATE_NEW_MESSAGE_IN_DIALOGS'

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yoooyyy'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Lol'},
        {id: 5, message: 'Kekeke'},
        {id: 6, message: 'Sdasdasdad'},
        {id: 7, message: 'asdadSADasdas ssdsd'},

    ],

    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Lera'},
        {id: 4, name: 'Daria'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Zhenya'},
        {id: 7, name: 'Ilya'},
    ],
    newMessageText: 'it-kamasutra.com',
}

const dialogsReducer = (state: DialogpageType = initialState, action: DispatchActionType) => {

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

export const updateNewMessageInDialogsActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_IN_DIALOGS,
    newTextDialogs: text
})

export const addMessageInDialogsActionCreator = () => ({type: ADD_MESSAGE_IN_DIALOGS})


export default dialogsReducer;