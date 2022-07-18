import React, { LegacyRef, Ref, RefObject, useImperativeHandle } from "react";

import styles from "./Input.module.css"; //I better use classes here :/

type Props = {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  labelText?: string;
  type: string;
  validInput: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

const Input: React.FunctionComponent<Props> = React.forwardRef<
  HTMLInputElement,
  Props
>(
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
              ? styles[type]
              : `${styles["invalid-input"]} ${styles[type]}`
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
