import React from "react";
import Button from "../../ui-components/Button/Button";
import Input from "../../ui-components/Input/Input";

const Login = (props: any) => {
  return (
    <div className="page centered">
      <div className="wrapper">
        <div className="wrapper-content ">
          <h1>Login</h1>
          <div className="wrapper-main-content">
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
            <Button valueText={"Login "} type={""} validInput={7 > 3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
