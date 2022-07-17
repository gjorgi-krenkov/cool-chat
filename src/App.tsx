import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import "./GlobalStyles.css";

function App() {
  const [isLoggedIn, setLoginStatus] = React.useState(false);
  return (
    <>
      {isLoggedIn? <Dashboard/> : <Login handleLogin ={() => setLoginStatus(true)} />}
    </>
  );
}

export default App;
