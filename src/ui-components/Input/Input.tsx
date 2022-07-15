import React from "react"
import styles from "./Input.module.css"

const Input = (props: any)  =>
{
    return (
        <>
        <label>{props.labelText}</label>
        <input
            type={props.type}
            placeholder={props.placeholder}
            className = {props.validInput ? styles[props.type] : `${styles['invalid-input']} ${styles[props.type]}`}
        />
        </>
    )
}
export default Input;
