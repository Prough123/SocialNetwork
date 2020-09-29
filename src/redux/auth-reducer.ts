
const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
}


export type initialStateType = typeof initialState
export type ActionsTypes = setUserDataACType


const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (data: setUserDataType) => ({

    type: SET_USER_DATA, data
})

type setUserDataACType = {
    type: typeof SET_USER_DATA,
    data: setUserDataType
}
export type setUserDataType = {
    userId: number
    email: string
    login: string
}


export default authReducer;