import React from "react";

import classes from "./Input.module.css"; //I better use classes here :/

type InputProps = {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  labelText?: string;
  type: string;
  validInput: boolean;
  style?: React.CSSProperties;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { labelText, style, onChange, type, placeholder, validInput, value, id },
    ref
  ) => {
    return (
      <>
        {labelText ? <label>{labelText}</label> : null}
        <input
          style={style}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={
            validInput
              ? classes[type]
              : `${classes["invalid-input"]} ${classes[type]}`
          }
          value={value}
          onChange={onChange}
          id={id}
        />
      </>
    );
  }
);

export default Input;
