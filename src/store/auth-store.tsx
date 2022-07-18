import React, { useState } from "react";
import UserType from "../types/UserType";

interface contextDef {
  user: UserType | null;
  onLogout: () => void;
  onLogin: (username: string, password: string) => void;
}

const AuthContext = React.createContext({
  user: localStorage.getItem("logindata"),
  onLogout: () => {},
  onLogin: (username: string, passowrd: string) => {},
} as contextDef);

export const AuthContextProvider = (props: any) => {
  const [user, setUser] = useState<UserType | null>(null);

  const onLogoutHandler = () => {
    setUser(null);
    localStorage.removeItem("logindata");
  };
  const onLoginHandler = (username: string, password: string) => {
    setUser({
      id: 0,
      username: username,
      is_active: true,
      img_url:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    });
    localStorage.setItem(
      "logindata",
      JSON.stringify({
        id: 0,
        username: username,
        is_active: true,
        img_url:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      })
    );
  };
  React.useEffect(() => {
    const a = localStorage.getItem("logindata");
    if (a) {
      setUser(JSON.parse(a));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ user: user, onLogout: onLogoutHandler, onLogin: onLoginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
