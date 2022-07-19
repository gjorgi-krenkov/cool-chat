import React, { ReactNode, useState } from "react";

import UserType from "../types/User";
import {LAST_CHAT_COOKIE_KEY} from "../config/default"

interface IChatContext {
  userTo: UserType | undefined;
  onHandleClick: (u: UserType) => void;
}

const ChatContext = React.createContext<IChatContext>({
  onHandleClick: () => {},
  userTo: undefined,
});

type ChatContextProps = {
  children: ReactNode;
};
export const ChatContextProvider = ({ children }: ChatContextProps) => {
  const [userTo, setUserTo] = useState<UserType>();

  React.useEffect(() => {
    const lastOpenedChatInPreviousSession = localStorage.getItem(LAST_CHAT_COOKIE_KEY);
    if (lastOpenedChatInPreviousSession) {
      setUserTo(JSON.parse(lastOpenedChatInPreviousSession));
    }
  }, []);

  const handleUserChange = (u: UserType) => {
    setUserTo(u);
    localStorage.setItem(LAST_CHAT_COOKIE_KEY, JSON.stringify(u));
  };

  return (
    <ChatContext.Provider
      value={{ userTo: userTo, onHandleClick: handleUserChange }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
