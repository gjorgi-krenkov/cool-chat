import React from "react";
import { useFriendsStatus } from "../../hooks/useFriendsStatus";
import AuthContext from "../../store/auth-store";
import Button from "../../ui-components/Button/Button";
import UserHandle from "../../ui-components/UserHandle/UserHandle";
import UserList from "../UserList/UserList";
import styles from "./FriendsPanel.module.css";

const FriendsPanel = (props: any) => {
  const authCtx = React.useContext(AuthContext);
  const { activeFriends, offlineFriends } = useFriendsStatus();
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["content"]}>
        <UserList
          onHandleClick={props.onHandleClick}
          users={activeFriends}
          type={"Active"}
        />
        <UserList
          onHandleClick={props.onHandleClick}
          users={offlineFriends}
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
          valueText={"Log out"}
          type={"button"}
          validInput={7 > 3}
        />
      </div>
    </div>
  );
};

export default FriendsPanel;
