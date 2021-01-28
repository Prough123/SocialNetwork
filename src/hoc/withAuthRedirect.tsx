import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";


type RedirectComponentType = {
    isAuth: boolean
}

const mapStateToPropsForDirect = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export const WithAuthRedirect = (Component: React.ComponentType) => {
    class RedirectComponent extends React.Component<RedirectComponentType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForDirect)(RedirectComponent)
}