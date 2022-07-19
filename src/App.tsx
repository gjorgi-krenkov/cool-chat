import React from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AuthContext from "./store/auth-store";
import { ChatContextProvider } from "./store/chat-store";

import "./GlobalStyles.css";

function App() {
  const authCtx = React.useContext(AuthContext);

  return authCtx.user ? (
    <ChatContextProvider>
      <Dashboard />
    </ChatContextProvider>
  ) : (
    <Login />
  );
}

export default App;
