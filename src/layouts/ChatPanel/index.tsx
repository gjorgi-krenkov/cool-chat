import React, { FormEvent, useState } from "react";
import AuthContext from "../../store/auth-store";
import ChatContext from "../../store/chat-store";
import Input from "../../ui-components/Input";
import Message from "../../ui-components/Message";
import UserHandle from "../../ui-components/UserHandle";
import styles from "./ChatPanel.module.css";

type MessageType = {
  from_id: number;
  value: string;
  time: string;
  day: string;
};
const messagesNikola: MessageType[] = [
  //Nikola - admin ili admin - Nikola ;p
  {
    from_id: 1, // Nikola
    value: "Nekoja poraka prethodno napishana od Nikola",
    //sent_date
    time: "3:15",
    day: "8/7/2022",
  },
  {
    from_id: 0, // admin
    value: "Nekoja poraka prethodno napishana od admin",
    //sent_date
    time: "3:16",
    day: "8/7/2022",
  },
  {
    from_id: 1, // Nikola
    value: "Nekoja poraka prethodno napishana od Nikola",
    //sent_date
    time: "3:15",
    day: "8/7/2022",
  },
];
const messagesNikola2: MessageType[] = [
  //Nikola - admin ili admin - Nikola ;p
  {
    from_id: 2, // Nikola
    value: "Nekoja poraka prethodno napishana od Nikola2",
    //sent_date
    time: "3:16",
    day: "8/7/2022",
  },
  {
    from_id: 0, // admin
    value: "Nekoja poraka prethodno napishana od admin",
    //sent_date
    time: "3:17",
    day: "8/7/2022",
  },
];

const ChatPanel = (props: any) => {
  const userFrom = React.useContext(AuthContext).user;
  const userTo = React.useContext(ChatContext).userTo;
  const messages =
    userTo === null ? [] : userTo.id === 1 ? messagesNikola : messagesNikola2;

  const chatInputRef = React.useRef<HTMLInputElement>(null);

  const [cnt, updateCnt] = useState(0);
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
    <div className={styles["main-wrapper"]}>
      <div className={styles["content"]}>
        {userTo ? (
          <>
            <div className={styles["header"]}>
              <UserHandle
                img={userTo ? userTo.img_url : null}
                handle={userTo ? userTo.username : null}
              />
            </div>
            <div className={styles["wrapper"]}>
              <div className={styles["block-container"]}>
                <div className={styles["messages"]}>
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
            <form onSubmit={handleSubmit} className={styles["chat-input"]}>
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
