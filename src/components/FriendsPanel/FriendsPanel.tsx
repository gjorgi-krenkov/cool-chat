import React from "react";
import AuthContext from "../../store/auth-store";
import Button from "../../ui-components/Button/Button";
import UserHandle from "../../ui-components/UserHandle/UserHandle";
import UserList from "../UserList/UserList";
import styles from "./FriendsPanel.module.css";

const FriendsPanel = (props: any) => {
  const authCtx = React.useContext(AuthContext);
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["content"]}>
        <UserList
          onHandleClick={props.onHandleClick}
          users={props.activeUsers}
          type={"Active"}
        />
        <UserList
          onHandleClick={props.onHandleClick}
          users={props.offlineUsers}
          type={"Offline"}
        />
      </div>
      <div className={styles["menu"]}>
        <UserHandle
          handle={authCtx.user?.username}
          img={authCtx.user?.img_url}
        />
        <Button
          onClick={authCtx.onLogout}
          valueText={"Logout"}
          type={"button"}
          validInput={7 > 3}
        />
      </div>
    </div>
  );
};

export default FriendsPanel;
