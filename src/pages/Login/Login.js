import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import "../Login/Login.css";

const Login = (props) => {
  const { isClickLogin, isCheckInputField, loginSuccess, loginError } = props;
  const [valueInputLogin, setValueInputLogin] = useState({
    email: "",
    password: "",
  });

  const { password } = valueInputLogin;

  const handleChangeValueInputLogin = (e) => {
    const { name, value } = e.target;
    setValueInputLogin({
      ...valueInputLogin,
      [name]: value,
    });
  };

  useEffect(() => {
    if (password) {
      if (isCheckInputField.password === password) {
        loginSuccess(valueInputLogin);
      } else {
        loginError();
      }
    } else {
      loginError();
    }
  }, [isClickLogin]);

  useEffect(() => {
    setValueInputLogin({
      ...valueInputLogin,
      email: isCheckInputField.email,
    });
  }, [isCheckInputField]);

  return (
    <div>
      {
        <div className="login">
          <Title title="LOGIN" />
          <Input
            type="text"
            placeholder="Email"
            value={valueInputLogin.email}
            name="email"
            handleInput={(e) => handleChangeValueInputLogin(e)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            handleInput={(e) => handleChangeValueInputLogin(e)}
          />
        </div>
      }
    </div>
  );
};

export default Login;
