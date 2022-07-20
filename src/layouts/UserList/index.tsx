import React, { FunctionComponent } from "react";

import ChatContext from "../../store/chat-store";
import UserType from "../../types/User";
import UserHandle from "../../ui-components/UserHandle";
import classes from "./UserList.module.css";

type UserListProps = {
  type: string;
  users: UserType[];
};

const UserList: FunctionComponent<UserListProps> = ({ users, type }) => {
  const chatContext = React.useContext(ChatContext);
  const unreadMessagesCount: number[] = React.useMemo(
    () => users.map(() => Number.parseInt(String((Math.random() * 100) / 2))),
    [users]
  );
  return (
    <div>
      <h2 className={classes["list-title"]}>{type} Users</h2>
      <div className={classes["list"]}>
        {users.map((user: UserType, index: number) => {
          return (
            <UserHandle
              onClick={() => {
                chatContext.onHandleClick(user);
              }}
              handle={user.handle}
              img_url={user.img_url}
              key={user.id}
              id={user.id}
              unread={unreadMessagesCount[index]}
              is_active={user.is_active}
            />
          );
        })}
      </div>
    </div>
  );
};
export default UserList;
