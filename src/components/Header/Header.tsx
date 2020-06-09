import React from 'react';
import ModuleHeader from './Header.module.css'

const Header = () => {
    return(
        <header className={ModuleHeader.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=""/>
        </header>
    )
}

export default Header;