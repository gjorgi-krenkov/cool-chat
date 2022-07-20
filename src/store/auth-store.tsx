import React, { FunctionComponent, useState } from "react";

import UserType from "../types/User";
import { LOGIN_STORE_COOKIE_KEY } from "../config/default";

interface IAuthContext {
  user: UserType | undefined;
  onLogout: () => void;
  onLogin: (username: string, password: string) => void;
}

const AuthContext = React.createContext<IAuthContext>({
  user: undefined,
  onLogout: () => {},
  onLogin: (username: string, password: string) => {},
});

type AuthContextProps = {
  children: React.ReactNode;
};
export const AuthContextProvider: FunctionComponent<AuthContextProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType>();

  const onLogoutHandler = () => {
    setUser(undefined);
    localStorage.removeItem(LOGIN_STORE_COOKIE_KEY);
  };
  const onLoginHandler = (username: string, password: string) => {
    const userToAdd: UserType = {
      id: 0,
      handle: username,
      is_active: true,
      img_url:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    };
    setUser(userToAdd);
    localStorage.setItem(LOGIN_STORE_COOKIE_KEY, JSON.stringify(userToAdd));
  };

  const previouslyLoggedIn = localStorage.getItem(LOGIN_STORE_COOKIE_KEY);

  React.useEffect(() => {
    if (previouslyLoggedIn) {
      setUser(JSON.parse(previouslyLoggedIn));
    }
  }, [previouslyLoggedIn]);
  return (
    <AuthContext.Provider
      value={{ user: user, onLogout: onLogoutHandler, onLogin: onLoginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
