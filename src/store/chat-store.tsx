import React, { ReactNode, useState } from "react";

import UserType from "../types/UserType";

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
    const a = localStorage.getItem("lastuser");
    if (a) {
      setUserTo(JSON.parse(a));
    }
  }, []);

  const handleUserChange = (u: UserType) => {
    setUserTo(u);
    localStorage.setItem("lastuser", JSON.stringify(u));
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
