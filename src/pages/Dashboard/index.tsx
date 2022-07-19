import ChatPanel from "../../layouts/ChatPanel";
import FriendsPanel from "../../layouts/FriendsPanel";
import styles from "./Dashboard.module.css";

const Dashboard = (props: any) => {
  return (
    <div className={styles["dashboard"]}>
      <div className={`wrapper-secondary-content ${styles["friends-panel"]}`}>
        <FriendsPanel />
      </div>
      <div className={`wrapper-main-content ${styles["chat-panel"]}`}>
        <ChatPanel />
      </div>
    </div>
  );
};

export default Dashboard;
