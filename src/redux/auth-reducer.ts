import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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

export const setAuthUserData = (data: setUserDataType): setAuthUserDataACType => ({
    type: SET_USER_DATA, data
})

type setAuthUserDataACType = {
    type: typeof SET_USER_DATA
    data: setUserDataType
}
export type setUserDataType = {
    userId: number | null
    email: string | null
    login: string | null
}

//thunk

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
}


export default authReducer;