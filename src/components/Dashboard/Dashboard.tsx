import React from "react";
import { useFriendsStatus } from "../../hooks/useFriendsStatus";
import UserType from "../../types/UserType";
import ChatPanel from "../ChatPanel/ChatPanel";
import FriendsPanel from "../FriendsPanel/FriendsPanel";
import styles from "./Dashboard.module.css";

const Dashboard = (props: any) => {
  const { activeFriends, offlineFriends } = useFriendsStatus();
  const [userTo, setUserTo] = React.useState<UserType | null>(null);
  const handleUserHandleClick = (u: UserType) => {
    setUserTo(u);
  };
  return (
    <div className={styles["dashboard"]}>
      <div className={`wrapper-secondary-content ${styles["friends-panel"]}`}>
        <FriendsPanel
          activeUsers={activeFriends}
          offlineUsers={offlineFriends}
          onHandleClick={handleUserHandleClick}
        />
      </div>
      <div className={`wrapper-main-content ${styles["chat-panel"]}`}>
        <ChatPanel userTo={userTo} />
      </div>
    </div>
  );
};

export default Dashboard;
