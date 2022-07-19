import React, { useContext } from "react";

import ChatContext from "../../store/chat-store";
import styles from "./UserHandle.module.css";

const UserHandle = (props: any) => {
  const userTo = useContext(ChatContext).userTo;

  return (
    <div
      onClick={props.onClick}
      className={
        userTo?.id === props.id ? styles["wrapper-selected"] : styles["wrapper"]
      }
    >
      <img
        src={props.img}
        alt={"Smthn wung"}
        className={styles["user-image"]}
      />
      <h3>{props.handle}</h3>
      {props.unread !== undefined && props.unread < 10 ? (
        <div className={styles["unread-number"]}>{props.unread}</div>
      ) : null}
    </div>
  );
};
export default UserHandle;
