import React, { useEffect, useState } from "react";
import "../Signup/Signup.css";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = (props) => {
  const { isClickSubmit, SignupSuccess, SignupError, handleChangeValueInput, valueInput } = props;
  const [showValuePassword, setShowValuePassword] = useState({
    showPassword: false,
    showConfirm: false,
  });


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
      if (valueInput.password && valueInput.confirmPassword && valueInput.email) {
        if (valueInput.password === valueInput.confirmPassword) {
          SignupSuccess(valueInput);
        } else if (valueInput.password !== valueInput.confirmPassword) {
          SignupError();
        }
      } else {
        SignupError();
      }
    }
  }, [isClickSubmit]);



  return (
    <>
      <div className="signup">
        <Title title={"SIGN UP"} />
        <Input
          type="text"
          placeholder="Email"
          value={valueInput.email}
          name="email"
          handleInput={handleChangeValueInput}
        />
        <div className="pass">
          {showValuePassword.showPassword ? (
            <Input
              type="text"
              placeholder="Password"
              value={valueInput.password}
              name="password"
              handleInput={handleChangeValueInput}
            />
          ) : (
            <Input
              type="password"
              placeholder="Password"
              value={valueInput.password}
              name="password"
              handleInput={handleChangeValueInput}
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
              value={valueInput.confirmPassword}
              name="confirmPassword"
              handleInput={handleChangeValueInput}
            />
          ) : (
            <Input
              type="password"
              placeholder="Confirm"
              value={valueInput.confirmPassword}
              name="confirmPassword"
              handleInput={handleChangeValueInput}
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
