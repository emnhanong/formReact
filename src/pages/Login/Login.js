import React from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Signup from "../Signup/Signup";
import "../Login/Login.css";

const Login = (props) => {
  const { value, valuePass, btn, handleBtnNext, handleSaveValue, handleSubmit,handleValuePass } = props;
  console.log(valuePass);
  return (
    <>
      {btn ? (
        <Signup />
      ) : (
        <div className="login">
          <Title title="Login" />
          <Input
            type="text"
            placeholder="Email"
            value={value}
            handleChangeInput={handleSaveValue}
          />
          <Input type="password" placeholder="Password" value={valuePass} handleChangeInput={handleValuePass}/>
          <div className="wrap-btn">
            <Button name="Back" handleClickBtn={handleBtnNext} />
            <Button name="Submit" handleClickBtn={handleSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
