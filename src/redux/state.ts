type DialogsDataProps = {
    id: number,
    name: string,
}

type MessageDataProps = {
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
}


type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: DialogpageType
    sidebar: SidebarType
}

export  type DispatchActionType = {
    type: string
    newText?: string
}



export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: DispatchActionType) => void
}


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
        messagesPage: {
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


    _addPost() {
        let newPost: PostsDataProps = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
           this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if(action.newText) {
                this._updateNewPostText(action.newText);
            }
        }
    }
}


export default store;