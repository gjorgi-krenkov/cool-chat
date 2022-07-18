import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";
import "./GlobalStyles.css";
import AuthContext from "./store/auth-store";

function App() {
  const authCtx = React.useContext(AuthContext);

  console.log(authCtx.user);
  return localStorage.getItem("logindata") ? <Dashboard /> : <Login />;
}

export default App;
