import * as serviceWorker from './serviceWorker';
import store, {RootStateType} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

store._callSubscriber(store.getState())
store.subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you cn change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
