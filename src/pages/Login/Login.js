import React from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import "../Login/Login.css";

const Login = (props) => {
  const { value, handleSaveValue, valueLoginPass, handleValueLoginPass } =
    props;

  return (
    <>
      {
        <div className="login">
          <Title title="Login" />
          <Input
            type="text"
            placeholder="Email"
            value={value}
            handleChangeInput={handleSaveValue}
          />
          <Input
            type="password"
            placeholder="Password"
            valueLoginPass={valueLoginPass}
            handleChangeInput={handleValueLoginPass}
          />
        </div>
      }
    </>
  );
};

export default Login;
