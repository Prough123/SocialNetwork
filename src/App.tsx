import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import state, {RootStateType, updateNewPostText} from './redux/state';


type Apptype = {
    state: RootStateType
    addPost: (postMessage: string) => void;
    updateNewPostText: (newText: string) => void;
}


const App = (props: Apptype) => {

    let messageData = state.messagesPage.messagesData;
    let dialogsData = state.messagesPage.dialogsData;
    let postsData = state.profilePage.postsData;
    let newPostText = state.profilePage.newPostText


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs messagesData={messageData} dialogsData={dialogsData}/>}/>
                    <Route path="/profile" render={() => <Profile newPostText={newPostText}  updateNewPostText={updateNewPostText} addPost={props.addPost} postsData={postsData}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
