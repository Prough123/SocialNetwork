import React from 'react';
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component <PropsFromRedux> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        login:state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const connector = connect(mapStateToProps, {setAuthUserData, getAuthUserData})

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);