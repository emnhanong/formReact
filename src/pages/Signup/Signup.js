import React, { useEffect, useState } from "react";
import "../Signup/Signup.css";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = (props) => {
  const { isClickSubmit, SignupSuccess, SignupError, saveDataSignup } = props;
  const [showValuePassword, setShowValuePassword] = useState({
    showPassword: false,
    showConfirm: false,
  });

  const [valueInputSignUp, setValueInputSignUp] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = valueInputSignUp;

  const handleChangeValueInputSingUp = (e) => {
    const { name, value } = e.target;
    setValueInputSignUp({
      ...valueInputSignUp,
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
      if (password && confirmPassword && email) {
        if (password === confirmPassword) {
          SignupSuccess(valueInputSignUp);
        } else if (password !== confirmPassword) {
          SignupError();
        }
      } else {
        SignupError();
      }
    }
  }, [isClickSubmit]);

  useEffect(() => {
    setValueInputSignUp({
      ...valueInputSignUp,
      email: saveDataSignup.email,
      password: saveDataSignup.password,
      confirmPassword: saveDataSignup.confirmPassword,
    });
  }, [saveDataSignup]);

  return (
    <>
      <div className="signup">
        <Title title={"SIGN UP"} />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          handleInput={(e) => handleChangeValueInputSingUp(e)}
        />
        <div className="pass">
          {showValuePassword.showPassword ? (
            <Input
              type="text"
              placeholder="Password"
              value={password}
              name="password"
              handleInput={(e) => handleChangeValueInputSingUp(e)}
            />
          ) : (
            <Input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              handleInput={(e) => handleChangeValueInputSingUp(e)}
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
              value={confirmPassword}
              name="confirmPassword"
              handleInput={(e) => handleChangeValueInputSingUp(e)}
            />
          ) : (
            <Input
              type="password"
              placeholder="Confirm"
              value={confirmPassword}
              name="confirmPassword"
              handleInput={(e) => handleChangeValueInputSingUp(e)}
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
