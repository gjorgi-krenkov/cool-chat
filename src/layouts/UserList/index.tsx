import React from "react";

import ChatContext from "../../store/chat-store";
import UserType from "../../types/UserType";
import UserHandle from "../../ui-components/UserHandle";
import styles from "./UserList.module.css";

const UserList = (props: any) => {
  const chatContext = React.useContext(ChatContext);
  return (
    <div>
      <h2 className={styles["list-title"]}>{props.type} Users</h2>
      <div className={styles["list"]}>
        {props.users.map((user: UserType) => {
          const unread = Number.parseInt(String((Math.random() * 100) / 2));
          return (
            <UserHandle
              onClick={() => {
                chatContext.onHandleClick(user);
              }}
              handle={user.username}
              img={user.img_url}
              key={user.id}
              id={user.id}
              unread={unread}
            />
          );
        })}
      </div>
    </div>
  );
};
export default UserList;
