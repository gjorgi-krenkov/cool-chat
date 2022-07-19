import React from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  labelText?: string;
  type?: "button" | "submit" | "reset" | undefined;
  validInput?: boolean | (() => boolean);
  onClick: () => void;
  valueText: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  labelText,
  type,
  validInput,
  onClick,
  valueText,
}) => {
  return (
    <>
      <label>{labelText}</label>
      <button
        type={type}
        className={
          validInput
            ? classes[String(type)]
            : `${classes["invalid-input"]} ${classes[String(type)]}`
        }
        onClick={onClick}
      >
        {valueText}
      </button>
    </>
  );
};
export default Button;
