import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import {DispatchActionType, RootStateType, StoreType} from './redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type Apptype = {
    state: RootStateType
    dispatch: (action: DispatchActionType) =>void
    store: any
}


const App = (props: Apptype) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/profile"
                           render={() => <Profile store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
