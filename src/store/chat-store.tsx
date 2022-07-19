import React, { useState } from "react";
import UserType from "../types/UserType";

interface contextDef {
  userTo: UserType | null;
  onHandleClick: (u: UserType) => void;
}

const ChatContext = React.createContext({
  userTo: null,
} as contextDef);

export const ChatContextProvider = (props: any) => {
  const [userTo, setUserTo] = useState<UserType | null>(null);

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
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
