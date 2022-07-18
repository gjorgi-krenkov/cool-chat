import React from "react";
import styles from "./Message.module.css";

const Message = (props: any) => {
  return (
    <div
      className={
        props.messageType === "sent"
          ? styles["wrapper-sent"]
          : styles["wrapper"]
      }
    >
      {props.messageType === "sent" ? null : (
        <img
          src={props.to_img}
          alt={"bla"}
          className={styles["user-image"]}
        ></img>
      )}
      <div
        className={`
        ${
          props.messageType === "sent"
            ? styles["content-sent"]
            : styles["content"]
        }
          ${
            props.messageType === "sent"
              ? styles["sent-message"]
              : styles["received-message"]
          }`}
      >
        <span className={styles["message-text"]}>{props.value}</span>
      </div>
      <span className={styles["message-time"]}>{props.time}</span>
    </div>
  );
};
export default Message;
