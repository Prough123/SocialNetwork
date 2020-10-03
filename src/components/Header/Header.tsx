import React from 'react';
import ModuleHeader from './Header.module.css'
import {NavLink} from "react-router-dom";


export type HeaderType = {
    isAuth: boolean
    login: null | string
}

const Header = (props:HeaderType) => {
    return(
        <header className={ModuleHeader.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=""/>
            <div className={ModuleHeader.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }

            </div>
        </header>
    )
}

export default Header;