import React from 'react';
import ModuleNavbar from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className={ModuleNavbar.nav}>
            <div className={ModuleNavbar.item}>
                <NavLink to="/profile" activeClassName={ModuleNavbar.active}>Profile</NavLink>
            </div>
            <div className={ModuleNavbar.item}>
                <NavLink to="/dialogs" activeClassName={ModuleNavbar.active}>Messages</NavLink>
            </div>
            <div className={ModuleNavbar.item}>
                <NavLink to="">News</NavLink>
            </div>
            <div className={ModuleNavbar.item}>
                <NavLink to="">Music</NavLink>
            </div>
            <div className={ModuleNavbar.item}>
                <NavLink to="">Settings</NavLink>
            </div>
            <div className={ModuleNavbar.item}>
                <NavLink to="/users">Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;