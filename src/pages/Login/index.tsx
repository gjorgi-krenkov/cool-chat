import React, { useState } from "react";

import AuthContext from "../../store/auth-store";
import Button from "../../ui-components/Button";
import Input from "../../ui-components/Input";

const Login = () => {
  const [username, updateUsername] = useState<string>("");
  const [password, updatePassword] = useState<string>("");

  const authCtx = React.useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFor = e.target.id;
    switch (inputFor) {
      case "username":
        updateUsername(e.target.value);
        break;
      case "password":
        updatePassword(e.target.value);
    }
  };

  return (
    <div className="page centered">
      <div className="wrapper">
        <div className="wrapper-content ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (username.trim() === "admin" && password.trim() === "admin") {
                authCtx.onLogin(username.trim(), password.trim());
              }
            }}
            className="wrapper-main-content"
          >
            <h1>Login</h1>
            <Input
              id={"username"}
              labelText={"Username"}
              placeholder={"Username "}
              type={"text"}
              validInput={username.length > 4}
              value={username}
              onChange={handleChange}
            />
            <Input
              id={"password"}
              labelText={"Password"}
              placeholder={"Password "}
              type={"password"}
              validInput={password.length > 4}
              value={password}
              onChange={handleChange}
            />
            <Button
              onClick={() => {}}
              valueText={"Login "}
              type={"submit"}
              validInput={7 > 3}
            />
          </form>
          <div className="wrapper-secondary-content m-auto ml-2">
            <h1>CoolChat</h1>
            <Button
              labelText={"Don't have account?"}
              valueText={"Register "}
              type={"button"}
              validInput={7 > 3}
              onClick={() => {}}
            />
            <Button
              labelText={"Forgot your password?"}
              valueText={"Reset password "}
              type={"button"}
              validInput={7 > 3}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
