import React from "react";

import classes from "./Message.module.css";

const Message = (props: any) => {
  return (
    <div
      className={
        props.messageType === "sent"
          ? classes["wrapper-sent"]
          : classes["wrapper"]
      }
    >
      {props.messageType === "sent" ? null : (
        <img
          src={props.to_img}
          alt={"bla"}
          className={classes["user-image"]}
        ></img>
      )}
      <div
        className={`
        ${
          props.messageType === "sent"
            ? classes["content-sent"]
            : classes["content"]
        }
          ${
            props.messageType === "sent"
              ? classes["sent-message"]
              : classes["received-message"]
          }`}
      >
        <span className={classes["message-text"]}>{props.value}</span>
      </div>
      <span className={classes["message-time"]}>{props.time}</span>
    </div>
  );
};
export default Message;
