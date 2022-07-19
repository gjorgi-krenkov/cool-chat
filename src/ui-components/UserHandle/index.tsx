import React, { useContext } from "react";

import ChatContext from "../../store/chat-store";
import UserType from "../../types/UserType";
import classes from "./UserHandle.module.css";

type UserHandleProps = UserType & {
  onClick?: () => void;
  unread?: number;
};

const UserHandle: React.FunctionComponent<UserHandleProps> = ({
  id,
  unread,
  handle,
  img_url,
  onClick,
}) => {
  const userTo = useContext(ChatContext).userTo;

  return (
    <div
      onClick={onClick}
      className={
        userTo?.id === id ? classes["wrapper-selected"] : classes["wrapper"]
      }
    >
      <img src={img_url} alt={"Smthn wung"} className={classes["user-image"]} />
      <h3>{handle}</h3>
      {unread !== undefined && unread < 10 ? (
        <div className={classes["unread-number"]}>{unread}</div>
      ) : null}
    </div>
  );
};
export default UserHandle;
