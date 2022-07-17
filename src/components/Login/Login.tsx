import React from "react";
import Button from "../../ui-components/Button/Button";
import Input from "../../ui-components/Input/Input";

const Login = (props: any) => {
  return (
    <div className="page centered">
      <div className="wrapper">
        <div className="wrapper-content ">

          <div className="wrapper-main-content">
          <h1>Login</h1>
            <Input
              labelText={"Username"}
              placeholder={"Username "}
              type={"text"}
              validInput={7 > 3}
            />
            <Input
              labelText={"Password"}
              placeholder={"Password "}
              type={"password"}
              validInput={7 > 3}
            />
            <Button onClick={props.handleLogin} valueText={"Login "} type={""} validInput={7 > 3} />
          </div>
          <div className="wrapper-secondary-content m-auto ml-2">
            <h1>CoolChat</h1>
          <Button labelText={"Don't have account?"} valueText={"Register "} type={""} validInput={7 > 3} />
          <Button labelText={"Forgot your password?"} valueText={"Reset password "} type={""} validInput={7 > 3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
