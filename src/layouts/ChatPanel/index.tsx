import React, { FormEvent, useState } from "react";

import AuthContext from "../../store/auth-store";
import ChatContext from "../../store/chat-store";
import MessageType from "../../types/MessageType";
import Input from "../../ui-components/Input";
import Message from "../../ui-components/Message";
import UserHandle from "../../ui-components/UserHandle";
import classes from "./ChatPanel.module.css";

import {messagesNikola,messagesNikola2} from "../../fake-data/messages"


const ChatPanel = (props: any) => {
  const userFrom = React.useContext(AuthContext).user;
  const userTo = React.useContext(ChatContext).userTo;
  const messages =
    userTo === undefined
      ? []
      : userTo.id === 1
      ? messagesNikola
      : messagesNikola2;

  const chatInputRef = React.useRef<HTMLInputElement>(null);

  const [cnt, updateCnt] = useState(0); //random state change to reevalute until full implementation
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (userFrom && chatInputRef.current) {
      if (chatInputRef.current.value.length === 0) return;
      const d = new Date(Date.now());
      const newMessage: MessageType = {
        from_id: userFrom.id,
        value: chatInputRef.current.value,
        time: `${d.getHours()}:${d.getMinutes()}`,
        day: "18/7/2022",
      };
      messages.push(newMessage);
      chatInputRef.current.value = "";
    }
    updateCnt(cnt + 1);
  };

  React.useEffect(() => {
    chatInputRef.current?.focus();
  }, [userTo]);

  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["content"]}>
        {userTo ? (
          <>
            <div className={classes["header"]}>
              <UserHandle
                id={userTo.id}
                is_active={userTo.is_active}
                img_url={userTo.img_url}
                handle={userTo.handle}
              />
            </div>
            <div className={classes["wrapper"]}>
              <div className={classes["block-container"]}>
                <div className={classes["messages"]}>
                  {messages.map((message: MessageType, index) => (
                    <Message
                      key={index}
                      messageType={
                        userFrom?.id === message.from_id ? "sent" : "received"
                      }
                      value={message.value}
                      to_img={userTo.img_url}
                      time={
                        message.time.split(":")[1].length - 1
                          ? message.time
                          : message.time.split(":")[0] +
                            ":0" +
                            message.time.split(":")[1]
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className={classes["chat-input"]}>
              <Input
                onChange={() => {}}
                style={{ width: "100%", backgroundColor: "#020412" }}
                type={"text"}
                placeholder={"Aa"}
                ref={chatInputRef}
                validInput={true}
              />
            </form>
          </>
        ) : (
          <h2 className="m-auto">Pick someone to chat with</h2>
        )}
      </div>
    </div>
  );
};
export default ChatPanel;
