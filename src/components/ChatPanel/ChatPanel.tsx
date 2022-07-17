import React from "react";
import Input from "../../ui-components/Input/Input";
import Message from "../../ui-components/Message/Message";
import UserHandle from "../../ui-components/UserHandle/UserHandle";
import styles from "./ChatPanel.module.css";

const ChatPanel = (props: any) => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["content"]}>
        <div className={styles["header"]}>
          <UserHandle />
        </div>
        <div className={styles["wrapper"]}>
          <div className={styles["messages"]}>
            <Message />
            <Message />
            <Message />
          </div>
        </div>
        <div className={styles["chat-input"]}>
          <Input  type={"text"} placeholder={"Aa"} validInput={true} />
        </div>
      </div>
    </div>
  );
};
export default ChatPanel;
