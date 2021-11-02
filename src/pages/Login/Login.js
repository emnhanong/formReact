import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import "../Login/Login.css";

const Login = (props) => {
  const { isClickLogin, saveDataLogin, loginSuccess, loginError, handleChangeValueInput, valueInput } = props;
  
  console.log(valueInput);

  useEffect(() => {
    if (isClickLogin === true) {
      if (saveDataLogin.email !== valueInput.email) {
        loginError();
      } else if (valueInput.password) {
        if (saveDataLogin.password === valueInput.password) {
          loginSuccess(valueInput);
        } else if (saveDataLogin.password !== valueInput.password) {
          loginError();
        }
      }
    }
  });

  return (
    <div>
      {
        <div className="login">
          <Title title="LOGIN" />
          <Input
            type="text"
            placeholder="Email"
            value={valueInput.email}
            name="email"
            handleInput={handleChangeValueInput}
          />
          <Input
            type="password"
            placeholder="Password"
            value={valueInput.password}
            name="password"
            handleInput={handleChangeValueInput}
          />
        </div>
      }
    </div>
  );
};

export default Login;
