import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

export const selectIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const selectCurrentUser = (state: AppStateType) => {
    return state.auth.login
}

