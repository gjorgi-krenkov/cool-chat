import React from "react";
import styles from "./UserHandle.module.css";

const UserHandle = (props: any) => {
  return (
    <div onClick={props.onClick} className={styles["wrapper"]}>
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
