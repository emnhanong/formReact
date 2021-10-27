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
    handleSaveValue,
    handleValueConfirm,
    handleValuePass,
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
        <Title title={"Sign up"} />
        <Input
          type="text"
          placeholder="Email"
          value={value}
          handleChangeInput={handleSaveValue}
        />
        <div className="pass">
          {show.showPassword ? (
            <Input
              type="text"
              placeholder="Password"
              value={valuePass}
              handleChangeInput={handleValuePass}
            />
          ) : (
            <Input
              type="password"
              placeholder="Password"
              value={valuePass}
              handleChangeInput={handleValuePass}
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
              handleChangeInput={handleValueConfirm}
            />
          ) : (
            <Input
              type="password"
              placeholder="Confirm"
              value={valueConfirm}
              handleChangeInput={handleValueConfirm}
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
