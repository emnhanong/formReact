import React, { useState } from "react/cjs/react.development";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Button from "./components/Button/Button";

const App = () => {
  const [isClickSubmit, setIsClickSubmit] = useState(false);
  const [isClickLogin, setIsClickLogin] = useState(false);
  const [valueInput, setValueInput] = useState({
    email:'',
    password:'',
    confirmPassword:''
  })

  const [currentStep, setCurrentStep] = useState({
    step1: true,
    step2: false,
  });

  const [saveDataLogin, setSaveDataLogin] = useState({
    email: '',
    password: '',
  });

  const handleChangeValueInput = (e) => {
    const { name, value } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const handleClickSubmit = () => {
    setIsClickSubmit(true);
  };

  const SignupError = () => {
    setIsClickSubmit(false);
    alert("Submit Error");
  };

  const SignupSuccess = (valueSignup) => {
    setSaveDataLogin({
      ...saveDataLogin,
      email: valueSignup.email,
      password: valueSignup.password,
    });
    setValueInput({
      ...valueInput,
      email:valueInput.email,
      password:valueSignup.password,
      confirmPassword:valueSignup.confirmPassword
    })
    setCurrentStep({
      ...setCurrentStep,
      step1: false,
      step2: true,
    });
  };

  const handleClickBack = () => {
    setIsClickSubmit(false);
    setCurrentStep({
      ...currentStep,
      step1: true,
      step2: false,
    });
  };

  const handleGetValueInputSignup = () => {
    setIsClickLogin(true);
  };

  const loginSuccess = (value) => {
    setIsClickLogin(false);
    alert("Email is:" + value.email);
    alert("Password is:" + value.password);
  };

  const loginError = () => {
    setIsClickLogin(false);
    console.log("login Error");
    alert("Login Error");
  };

  return (
    <div className="App">
      {currentStep.step1 && (
        <Signup
          isClickSubmit={isClickSubmit}
          SignupSuccess={SignupSuccess}
          SignupError={SignupError}
          handleChangeValueInput={handleChangeValueInput}
          valueInput={valueInput}
        />
      )}

      {currentStep.step1 && (
        <Button name="Next" handleClickBtn={handleClickSubmit} />
      )}

      {currentStep.step2 && (
        <Login
          saveDataLogin={saveDataLogin}
          isClickLogin={isClickLogin}
          loginSuccess={loginSuccess}
          loginError={loginError}
          handleChangeValueInput={handleChangeValueInput}
          valueInput={valueInput}
        />
      )}

      {currentStep.step2 && (
        <div className="wrap-btn">
          <Button name="Submit" handleClickBtn={handleGetValueInputSignup} />
          <Button name="Back" handleClickBtn={handleClickBack} />
        </div>
      )}
    </div>
  );
};

export default App;
