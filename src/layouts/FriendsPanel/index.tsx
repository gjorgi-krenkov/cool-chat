import React, { FunctionComponent } from "react";

import { useFriendsStatus } from "../../hooks/useFriendsStatus";
import AuthContext from "../../store/auth-store";
import Button from "../../ui-components/Button";
import UserHandle from "../../ui-components/UserHandle";
import UserList from "../UserList";
import classes from "./FriendsPanel.module.css";

const FriendsPanel: FunctionComponent = () => {
  const authCtx = React.useContext(AuthContext);

  const { activeFriends, offlineFriends } = useFriendsStatus();

  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["content"]}>
        <UserList users={activeFriends} type={"Active"} />
        <UserList users={offlineFriends} type={"Offline"} />
      </div>
      <div className={classes["menu"]}>
        {authCtx.user && (
          <UserHandle
            handle={authCtx.user.handle}
            img_url={authCtx.user.img_url}
            key={authCtx.user.id}
            id={authCtx.user.id}
            is_active={authCtx.user.is_active}
          />
        )}
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
