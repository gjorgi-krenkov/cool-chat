import React, { FunctionComponent } from "react";

import classes from "./Message.module.css";

type MessageProps = {
  messageType: string;
  to_img: string;
  value: string;
  time: string;
};

const Message: FunctionComponent<MessageProps> = ({
  messageType,
  to_img,
  value,
  time,
}) => {
  return (
    <div
      className={
        messageType === "sent" ? classes["wrapper-sent"] : classes["wrapper"]
      }
    >
      {messageType === "sent" ? null : (
        <img
          src={to_img}
          alt={"bla"}
          className={classes["user-image"]}
        ></img>
      )}
      <div
        className={`
        ${messageType === "sent" ? classes["content-sent"] : classes["content"]}
          ${
            messageType === "sent"
              ? classes["sent-message"]
              : classes["received-message"]
          }`}
      >
        <span className={classes["message-text"]}>{value}</span>
      </div>
      <span className={classes["message-time"]}>{time}</span>
    </div>
  );
};
export default Message;
