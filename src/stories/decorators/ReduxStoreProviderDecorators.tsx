import React from 'react'
import {Provider} from "react-redux";
import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "../../redux/dialogs-reducer";
import profileReducer from "../../redux/profile-reducer";
import sidebarReducer from "../../redux/sidebar-reducer";
import usersReducer from "../../redux/users-reducer";
import {BrowserRouter} from "react-router-dom";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export const storyBookStore = createStore(rootReducers);

export const ReduxStoreProviderDecorators = (storyFn: any) => {
    return <BrowserRouter>
        <Provider store={storyBookStore}>
            {storyFn()}
        </Provider>
    </BrowserRouter>
}
