import {MessageDataProps} from "./store";
import {v1} from "uuid";


const ADD_MESSAGE_IN_DIALOGS = 'ADD_MESSAGE_IN_DIALOGS'

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
    profile: null
}

type initialStateType = typeof initialState

export type ActionsTypes =  addMessageInDialogsACType

const dialogsReducer = (state: initialStateType  = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ADD_MESSAGE_IN_DIALOGS: {
            let newMessage: MessageDataProps = {
                id: v1(),
                message: action.newMessageBody
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        }
        default:
            return state
    }
}


export const addMessageInDialogsActionCreator = (newMessageBody:string):addMessageInDialogsACType => ({type: ADD_MESSAGE_IN_DIALOGS, newMessageBody:newMessageBody})

export type addMessageInDialogsACType = {
    type: typeof ADD_MESSAGE_IN_DIALOGS
    newMessageBody:string
}

export default dialogsReducer;