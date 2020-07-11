let rerenderEntireTree = (state:RootStateType) => {
    console.log('State is changed')
}
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


let state: RootStateType = {
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

}

export const addPost = (postMessage: string) => {
    let newPost: PostsDataProps = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer:(state:RootStateType) => void) => {
    rerenderEntireTree = observer
}

export default state;