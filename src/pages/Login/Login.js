import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import "../Login/Login.css";

const Login = (props) => {
  const {
    isClickLogin,
    saveDataLogin,
    loginSuccess,
    loginError,
  } = props;

  const [valueInputLogin, setValueInputLogin] = useState({
    email:'',
    password:''
  })


  const handleChangeValueInputLogin = (e) => {
    const { name, value } = e.target;
    setValueInputLogin({
      ...valueInputLogin,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isClickLogin === true) {
      if (valueInputLogin.password) {
        if (saveDataLogin.password === valueInputLogin.password) {
          loginSuccess(saveDataLogin);
        } else if (saveDataLogin.password !== valueInputLogin.password) {
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
            value={saveDataLogin.email}
            name="email"
            handleInput={handleChangeValueInputLogin}
          />
          <Input
            type="password"
            placeholder="Password"
            value={valueInputLogin.password}
            name="password"
            handleInput={handleChangeValueInputLogin}
          />
        </div>
      }
    </div>
  );
};

export default Login;
