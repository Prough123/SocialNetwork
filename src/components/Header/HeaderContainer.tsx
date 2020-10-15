import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component <PropsFromRedux> {

    componentDidMount() {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                }
            })
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

const connector = connect(mapStateToProps, {setAuthUserData})

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);