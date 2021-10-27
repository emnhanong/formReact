import React, { useState } from "react";
import "../Signup/Signup.css";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = (props) => {
  const {
    value,
    valuePass,
    valueConfirm,
    handleChangeEmail,
    handleChangeConfirmPassWord,
    handleChangePassWord,
  } = props;

  const [show, setShow] = useState({
    showPassword: false,
    showConfirm: false,
  });

  const handleShow = (params) => {
    if (params === "pass") {
      setShow({
        ...show,
        showPassword: !show.showPassword,
      });
    } else if (params === "confirms") {
      setShow({
        ...show,
        showConfirm: !show.showConfirm,
      });
    }
  };

  return (
    <>
      <div className="signup">
        <Title title={"SIGN UP"} />
        <Input
          type="text"
          placeholder="Email"
          value={value}
          handleChangeInput={handleChangeEmail}
        />
        <div className="pass">
          {show.showPassword ? (
            <Input
              type="text"
              placeholder="Password"
              value={valuePass}
              handleChangeInput={handleChangePassWord}
            />
          ) : (
            <Input
              type="password"
              placeholder="Password"
              value={valuePass}
              handleChangeInput={handleChangePassWord}
            />
          )}
          <button className="svg" onClick={() => handleShow("pass")}>
            {show.showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="pass">
          {show.showConfirm ? (
            <Input
              type="text"
              placeholder="Confirm"
              value={valueConfirm}
              handleChangeInput={handleChangeConfirmPassWord}
            />
          ) : (
            <Input
              type="password"
              placeholder="Confirm"
              value={valueConfirm}
              handleChangeInput={handleChangeConfirmPassWord}
            />
          )}
          <button className="svg" onClick={() => handleShow("confirms")}>
            {show.showConfirm ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
