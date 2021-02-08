import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type  LoginFormType = {
    onSubmit: () => void
}


export const LoginForm = (props: InjectedFormProps) => {
    const {handleSubmit}  = props
    return (
        <form onSubmit={handleSubmit} action="">
            <div>
                <Field name="login" type="text" component="input" placeholder={"Login"}/>
            </div>
            <div>
                <Field name="password" type="text" component="input" placeholder={"Password"}/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" placeholder={"Login"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const Login = () => {

    const onSubmit = () => {}

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)


