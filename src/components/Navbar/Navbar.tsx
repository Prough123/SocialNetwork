import React from 'react';
import ModuleNavbar from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={ModuleNavbar.nav}>
            <div className={ModuleNavbar.item}>
                <a href="">Profile</a>
            </div>
            <div className={ModuleNavbar.item}>
                <a href="">Messages</a>
            </div>
            <div className={ModuleNavbar.item}>
                <a href="">News</a>
            </div>
            <div className={ModuleNavbar.item}>
                <a href="">Music</a>
            </div>
            <div className={ModuleNavbar.item}>
                <a href="">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;