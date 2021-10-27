import React, {useState } from "react";
import "../Signup/Signup.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Login from "../Login/Login";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Signup = () => {
  const [btn, setBtn] = useState(true);
  const [value, setValue] = useState('');
  const [valuePass, setValuePass] = useState('');
  const [valueConfirm, setValueConfirm] = useState('');

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

  const handleBtnNext = () => {
    if(value === ""){
      alert("You need to enter your email");
    }
    else if(valuePass === valueConfirm){
      setBtn(!btn);
    }
    else{
      alert("Wrong password please re-enter");
    }
  };

  const handleSaveValue = (e) => {
    setValue(e.target.value);
  }

  const handleValuePass = (e) => {
    setValuePass(e.target.value);
  }

  const handleValueConfirm = (e) => {
    setValueConfirm(e.target.value);
  }

  const handleSubmit = () => {
    alert('Email is:' + value);
    alert('Password is:' + valuePass);
  }


  return (
    <>
      {btn ? (
        <div className="signup">
          <Title title={"Sign up"} />
          <Input type="text" placeholder="Email" value={value} handleChangeInput={handleSaveValue}/>
          <div className="pass">
            {show.showPassword ? (
              <Input type="text" placeholder="Password" value={valuePass} handleChangeInput={handleValuePass}/>
            ) : (
              <Input type="password" placeholder="Password" value={valuePass} handleChangeInput={handleValuePass}/>
            )}
            <button className="svg" onClick={() => handleShow("pass")}>
              {show.showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="pass">
            {show.showConfirm ? (
              <Input type="text" placeholder="Confirm" value={valueConfirm} handleChangeInput={handleValueConfirm}/>
            ) : (
              <Input type="password" placeholder="Confirm" value={valueConfirm} handleChangeInput={handleValueConfirm}/>
            )}
            <button className="svg" onClick={() => handleShow("confirms")}>
              {show.showConfirm ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <Button name="Next" handleClickBtn={handleBtnNext} />
        </div>
      ) : (
        <Login handleBtnNext={handleBtnNext} btn={btn} value={value} valuePass= {valuePass} handleSaveValue={handleSaveValue} handleSubmit={handleSubmit} handleValuePass={handleValuePass}/>
      )}
    </>
  );
};

export default Signup;
