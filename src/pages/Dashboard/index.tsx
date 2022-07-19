import ChatPanel from "../../layouts/ChatPanel";
import FriendsPanel from "../../layouts/FriendsPanel";
import classes from "./Dashboard.module.css";

const Dashboard: React.FunctionComponent = () => {
  return (
    <div className={classes["dashboard"]}>
      <div className={`wrapper-secondary-content ${classes["friends-panel"]}`}>
        <FriendsPanel />
      </div>
      <div className={`wrapper-main-content ${classes["chat-panel"]}`}>
        <ChatPanel />
      </div>
    </div>
  );
};

export default Dashboard;
