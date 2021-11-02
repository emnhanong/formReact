import React, { useEffect, useState } from "react";
import "../Signup/Signup.css";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = (props) => {
  const { isClickSubmit, SignupSuccess, SignupError, defaultValue } = props;
  const [showValuePassword, setShowValuePassword] = useState({
    showPassword: false,
    showConfirm: false,
  });
  const [valueInputSignup, setValueInputSignup] = useState({
    email: defaultValue.email,
    password: defaultValue.password,
    confirmPassword: defaultValue.password,
  });

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleChangeValueInputSignup = (e) => {
    const { name, value } = e.target;
    setValueInputSignup({
      ...valueInputSignup,
      [name]: value,
    });
  };

  const handleShowPasswordSignUp = (params) => {
    if (params === "password") {
      setShowValuePassword({
        ...showValuePassword,
        showPassword: !showValuePassword.showPassword,
      });
    }
    if (params === "confirmPassword") {
      setShowValuePassword({
        ...showValuePassword,
        showConfirm: !showValuePassword.showConfirm,
      });
    }
  };

  useEffect(() => {
    if (isClickSubmit) {
      if (
        validateEmail(valueInputSignup.email) &&
        valueInputSignup.password === valueInputSignup.confirmPassword
      )
        SignupSuccess(valueInputSignup);
      else SignupError();
    }
  }, [isClickSubmit]);

  return (
    <>
      <div className="signup">
        <Title title={"SIGN UP"} />
        <Input
          type="email"
          placeholder="Email"
          value={valueInputSignup.email}
          name="email"
          handleInput={handleChangeValueInputSignup}
        />
        <div className="pass">
          {showValuePassword.showPassword ? (
            <Input
              type="text"
              placeholder="Password"
              value={valueInputSignup.password}
              name="password"
              handleInput={handleChangeValueInputSignup}
            />
          ) : (
            <Input
              type="password"
              placeholder="Password"
              value={valueInputSignup.password}
              name="password"
              handleInput={handleChangeValueInputSignup}
            />
          )}
          <button
            className="svg"
            onClick={() => handleShowPasswordSignUp("password")}
          >
            {showValuePassword.showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="pass">
          {showValuePassword.showConfirm ? (
            <Input
              type="text"
              placeholder="Confirm"
              value={valueInputSignup.confirmPassword}
              name="confirmPassword"
              handleInput={handleChangeValueInputSignup}
            />
          ) : (
            <Input
              type="password"
              placeholder="Confirm"
              value={valueInputSignup.confirmPassword}
              name="confirmPassword"
              handleInput={handleChangeValueInputSignup}
            />
          )}
          <button
            className="svg"
            onClick={() => handleShowPasswordSignUp("confirmPassword")}
          >
            {showValuePassword.showConfirm ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
