import React, { useEffect, useState } from "react";
import "../Signup/Signup.css";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = (props) => {
  const {
    isClickSubmit,
    handleSubmitSuccess,
    handleSubmitError,
    isSaveValueSignup,
  } = props;
  const [show, setShow] = useState({
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
      setShow({
        ...show,
        showPassword: !show.showPassword,
      });
    } else if (params === "confirmPassword") {
      setShow({
        ...show,
        showConfirm: !show.showConfirm,
      });
    }
  };

  useEffect(() => {
    if (isClickSubmit) {
      if (password && confirmPassword && email) {
        if (password === confirmPassword) {
          handleSubmitSuccess(valueInputSignUp);
        } else if (password !== confirmPassword) {
          handleSubmitError("Submit Error");
        }
      } else {
        handleSubmitError("Submit Error");
      }
    }
  }, [isClickSubmit]);

  useEffect(() => {
    setValueInputSignUp({
      ...valueInputSignUp,
      email: isSaveValueSignup.email,
      password: isSaveValueSignup.password,
      confirmPassword: isSaveValueSignup.confirmPassword,
    });
  }, [isSaveValueSignup]);

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
          {show.showPassword ? (
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
            {show.showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="pass">
          {show.showConfirm ? (
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
            {show.showConfirm ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
