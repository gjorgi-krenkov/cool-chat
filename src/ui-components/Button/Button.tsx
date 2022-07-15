import React from "react";
import styles from "./Button.module.css";

const Button = (props: any) => {
  return (
    <>
      <label>{props.labelText}</label>
      <button
        type={props.type}
        className={
          props.validInput
            ? styles[props.type]
            : `${styles["invalid-input"]} ${styles[props.type]}`
        }
      >
        {props.valueText}
      </button>
    </>
  );
};
export default Button;
