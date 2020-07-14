import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import store, {DispatchActionType, RootStateType} from './redux/state';


type Apptype = {
    state: RootStateType
    dispatch: (action: DispatchActionType) =>void
}


const App = (props: Apptype) => {


    debugger

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.messagesPage}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
