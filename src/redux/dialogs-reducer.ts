import {DialogpageType, DispatchActionType, MessageDataProps} from "./store";
import {v1} from "uuid";


const ADD_MESSAGE_IN_DIALOGS = 'ADD_MESSAGE_IN_DIALOGS'
const UPDATE_NEW_MESSAGE_IN_DIALOGS = 'UPDATE_NEW_MESSAGE_IN_DIALOGS'

let initialState = {
    messagesData: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yoooyyy'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Lol'},
        {id: v1(), message: 'Kekeke'},
        {id: v1(), message: 'Sdasdasdad'},
        {id: v1(), message: 'asdadSADasdas ssdsd'},

    ],

    dialogsData: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Lera'},
        {id: v1(), name: 'Daria'},
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Zhenya'},
        {id: v1(), name: 'Ilya'},
    ],
    newMessageText: 'it-kamasutra.com',
}

const dialogsReducer = (state: DialogpageType = initialState, action: DispatchActionType) => {

    switch (action.type) {
        case ADD_MESSAGE_IN_DIALOGS: {
            let newMessage: MessageDataProps = {
                id: v1(),
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        }


        case UPDATE_NEW_MESSAGE_IN_DIALOGS: {
            if (action.newTextDialogs) {
                return {...state, newMessageText: action.newTextDialogs}

            }
            return state
        }
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