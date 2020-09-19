import React from 'react';

import {ReduxStoreProviderDecorators} from "./decorators/ReduxStoreProviderDecorators";
import Navbar from "../components/Navbar/Navbar";



export default {
    title: 'SocialNetwork/NavBar',
    component: Navbar,
    decorators: [ReduxStoreProviderDecorators]
}

export const NavBarStorybook = (props:any) => {
    return(
      <Navbar/>
    )
}
