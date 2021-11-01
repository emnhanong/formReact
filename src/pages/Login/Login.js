import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import "../Login/Login.css";

const Login = (props) => {
  const { isClickLogin, saveDataLogin, loginSuccess, loginError } = props;
  const [valueInputLogin, setValueInputLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = valueInputLogin;

  const handleChangeValueInputLogin = (e) => {
    const { name, value } = e.target;
    setValueInputLogin({
      ...valueInputLogin,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isClickLogin === true) {
      if (saveDataLogin.email !== email) {
        loginError();
      } else if (password) {
        if (saveDataLogin.password === password) {
          loginSuccess(valueInputLogin);
        } else if (saveDataLogin.password !== password) {
          loginError();
        }
      }
    }
  });

  useEffect(() => {
    setValueInputLogin({
      ...valueInputLogin,
      email: saveDataLogin.email,
    });
  }, [saveDataLogin]);

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
