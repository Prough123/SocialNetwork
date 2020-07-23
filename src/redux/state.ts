import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

type DialogsDataProps = {
    id: number,
    name: string,
}

export type MessageDataProps = {
    id: number,
    message: string,
}

export type PostsDataProps = {
    id: number,
    message: string,
    likesCount: number,
}

export type ProfilePageType = {
    postsData: Array<PostsDataProps>
    newPostText: string
}

export type DialogpageType = {
    messagesData: Array<MessageDataProps>
    dialogsData: Array<DialogsDataProps>
    newMessageText: string
}


export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogpageType
    sidebar: SidebarType
}

export  type DispatchActionType = {
    type: string
    newText?: string
    newTextDialogs?: string
}


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: DispatchActionType) => void

}


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE_IN_DIALOGS = 'ADD_MESSAGE_IN_DIALOGS'
const UPDATE_NEW_MESSAGE_IN_DIALOGS = 'UPDATE_NEW_MESSAGE_IN_DIALOGS'

let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 36},
                {id: 2, message: 'Its my first post', likesCount: 344},
                {id: 3, message: 'How are you?', likesCount: 3},
                {id: 4, message: 'Lol', likesCount: 6},
                {id: 5, message: 'Kekeke', likesCount: 16},
                {id: 6, message: 'Sdasdasdad', likesCount: 32},
                {id: 7, message: 'asdadSADasdas ssdsd', likesCount: 136},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yoooyyy'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Lol'},
                {id: 5, message: 'Kekeke'},
                {id: 6, message: 'Sdasdasdad'},
                {id: 7, message: 'asdadSADasdas ssdsd'},

            ],
            newMessageText: 'it-kamasutra.com',
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Lera'},
                {id: 4, name: 'Daria'},
                {id: 5, name: 'Sergey'},
                {id: 6, name: 'Zhenya'},
                {id: 7, name: 'Ilya'},
            ]
        },
        sidebar: {}

    },
    _callSubscriber(state: RootStateType) {
        console.log('State is changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },


    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}



export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const updateNewMessageInDialogsActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_IN_DIALOGS,
    newTextDialogs: text
})

export const addMessageInDialogsActionCreator = () => ({type: ADD_MESSAGE_IN_DIALOGS})


export default store;