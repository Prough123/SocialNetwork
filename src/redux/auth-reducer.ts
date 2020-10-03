
const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
}


export type initialStateType = typeof initialState
export type ActionsTypes = setAuthUserDataACType


const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: setUserDataType) => ({

    type: SET_USER_DATA, data
})

type setAuthUserDataACType = {
    type: typeof SET_USER_DATA,
    data: setUserDataType
}
export type setUserDataType = {
    userId: number
    email: string
    login: string
}


export default authReducer;