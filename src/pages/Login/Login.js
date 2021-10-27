import React from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import "../Login/Login.css";

const Login = (props) => {
  const {
    value,
    handleChangeEmail,
    valueLoginPass,
    handleChangeLoginPassword,
  } = props;

  return (
    <>
      {
        <div className="login">
          <Title title="LOGIN" />
          <Input
            type="text"
            placeholder="Email"
            value={value}
            handleChangeInput={handleChangeEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={valueLoginPass}
            handleChangeInput={handleChangeLoginPassword}
          />
        </div>
      }
    </>
  );
};

export default Login;
