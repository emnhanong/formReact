import React, { useEffect, useState } from "react";
import "../Signup/Signup.css";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = (props) => {
  const { isClickSignup, SignupSuccess, SignupError, defaultValueSignup } =
    props;
  const [showValuePassword, setShowValuePassword] = useState({
    showPassword: false,
    showConfirm: false,
  });
  const [valueInputSignup, setValueInputSignup] = useState({
    email: defaultValueSignup.email,
    password: defaultValueSignup.password,
    confirmPassword: defaultValueSignup.password,
  });
  const [errorsFields, setErrorsFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    if (isClickSignup) {
      const isEmptyFields =
        valueInputSignup.email === "" ||
        valueInputSignup.password === "" ||
        valueInputSignup.confirmPassword === "";
      const isInvalidFields =
        !validateEmail(valueInputSignup.email) ||
        valueInputSignup.password !== valueInputSignup.confirmPassword;
      const failedSignup = isEmptyFields || isInvalidFields;

      if (failedSignup) {
        const newErrors = {
          password: "",
          confirmPassword: "",
          email: "",
        };
        SignupError();
        if (valueInputSignup.email === "") newErrors.email = "Email is empty";
        else if (!validateEmail(valueInputSignup.email))
          newErrors.email = "Email is invalid";
        if (valueInputSignup.password === "")
          newErrors.password = "Password is empty";
        if (valueInputSignup.confirmPassword === "")
          newErrors.confirmPassword = "Confirm password is empty";
        if (
          valueInputSignup.confirmPassword !== valueInputSignup.password &&
          valueInputSignup.password &&
          valueInputSignup.confirmPassword
        )
          newErrors.password = "Not match confirm password";
        setErrorsFields(newErrors);
      } else SignupSuccess(valueInputSignup);
    }
  }, [isClickSignup]);

  return (
    <>
      <div className="signup">
        <Title title={"SIGN UP"} />
        <div className="wrap-input">
          <Input
            type="email"
            placeholder="Email"
            value={valueInputSignup.email}
            name="email"
            handleInput={handleChangeValueInputSignup}
          />
          {errorsFields.email && (
            <span className="valid-text">{errorsFields.email}</span>
          )}
        </div>
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
          {errorsFields.password && (
            <span className="valid-text">{errorsFields.password}</span>
          )}
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
          {errorsFields.confirmPassword && (
            <span className="valid-text">{errorsFields.confirmPassword}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
