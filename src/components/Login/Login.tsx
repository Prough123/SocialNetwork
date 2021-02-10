import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";


type  LoginFormType = {
    onSubmit: () => void
}

const maxLength10 = maxLengthCreator(10)

export const LoginForm = (props: InjectedFormProps) => {
    const {handleSubmit}  = props
    return (
        <form onSubmit={handleSubmit} action="">
            <div>
                <Field name="login" type="text" component={Input} placeholder={"Login"} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field name="password" type="text" component={Input} placeholder={"Password"} validate={[required, maxLength10]}/>
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


