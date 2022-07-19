import React from "react";
import { useFriendsStatus } from "../../hooks/useFriendsStatus";
import AuthContext from "../../store/auth-store";
import Button from "../../ui-components/Button";
import UserHandle from "../../ui-components/UserHandle";
import UserList from "../UserList";
import styles from "./FriendsPanel.module.css";

const FriendsPanel = (props: any) => {
  const authCtx = React.useContext(AuthContext);

  const { activeFriends, offlineFriends } = useFriendsStatus();
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["content"]}>
        <UserList users={activeFriends} type={"Active"} />
        <UserList users={offlineFriends} type={"Offline"} />
      </div>
      <div className={styles["menu"]}>
        <UserHandle
          handle={authCtx.user?.username}
          img={authCtx.user?.img_url}
          key={authCtx.user?.id}
          id={authCtx.user?.id}
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
