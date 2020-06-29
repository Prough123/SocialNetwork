import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import {state} from "./redux/state";





const App = () => {

    let messageData = state.messagesPage.messagesData;
    let dialogsData = state.messagesPage.dialogsData;
    let postsData = state.profilePage.postsData;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"  render={()=> <Dialogs messagesData={messageData} dialogsData={dialogsData}/>}/>
                    <Route path="/profile" render={()=> <Profile postsData={postsData}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
