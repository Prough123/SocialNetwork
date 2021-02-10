import React from 'react'
import  styles  from './FormsControls.module.css'




const FormControl = ({input, meta,child, element, ...props}:any) => {
    const hasError = meta?.touched && meta?.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {React.createElement(element, {...input, ...props})}
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props:any) => {
    return <FormControl {...props} element={"textarea"}/>
}


export const Input = (props:any) => {
    return <FormControl {...props} element={"input"}/>
}



