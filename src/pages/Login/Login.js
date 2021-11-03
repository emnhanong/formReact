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

  const [errorsFields, setErrorsFields] = useState({
    email: "",
    password: "",
  });

  const handleChangeValueInputLogin = (e) => {
    const { name, value } = e.target;
    setValueInputLogin({
      ...valueInputLogin,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isClickLogin) {
      const failedLogin = saveDataLogin.password !== valueInputLogin.password;
      if (failedLogin) {
        const errors = {
          email: '',
          password: ''
        }
        loginError();
        if (saveDataLogin.password !== valueInputLogin.password) {
          setErrorsFields({
            ...errorsFields,
            password: "Incorrect password",
          });
        }
      } else loginSuccess(saveDataLogin);
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
          <div className="wrap-input">
            <Input
              type="password"
              placeholder="Password"
              value={valueInputLogin.password}
              name="password"
              handleInput={handleChangeValueInputLogin}
            />
            {errorsFields.password && (
              <span className="valid-text">{errorsFields.password}</span>
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default Login;
