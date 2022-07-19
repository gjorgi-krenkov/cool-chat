import React from "react";
import UserType from "../../types/UserType";
import UserHandle from "../../ui-components/UserHandle/UserHandle";
import styles from "./UserList.module.css";

const UserList = (props: any) => {
  return (
    <div>
      <h2 className={styles["list-title"]}>{props.type} Users</h2>
      <div className={styles["list"]}>
        {props.users.map((user: UserType) => {
          const unread = Number.parseInt(String((Math.random() * 100) / 2));
          return (
            <UserHandle
              onClick={() => {
                props.onHandleClick(user);
              }}
              handle={user.username}
              img={user.img_url}
              key={user.id}
              unread={unread}
            />
          );
        })}
      </div>
    </div>
  );
};
export default UserList;
