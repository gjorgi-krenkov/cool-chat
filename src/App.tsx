import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./GlobalStyles.css";
import AuthContext from "./store/auth-store";
import { ChatContextProvider } from "./store/chat-store";

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
