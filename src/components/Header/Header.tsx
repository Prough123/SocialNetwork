import React from 'react';
import ModuleHeader from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header className={ModuleHeader.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=""/>
            <div className={ModuleHeader.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;