import React, { useState } from "react/cjs/react.development";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Button from "./components/Button/Button";

const App = () => {


  const [isClickSubmit, setIsClickSubmit] = useState(false);
  const [isClickLogin, setIsClickLogin] = useState(false);
  const [currentStep, setCurrentStep] = useState({
    step1: true,
    step2: false,
  });

  const [saveDataLogin, setSaveDataLogin] = useState({
    email: '',
    password: '',
  });

  const handleClickSubmit = () => {
    setIsClickSubmit(true);
  };

  const SignupError = () => {
    setIsClickSubmit(false);
    alert("Submit Error");
  };

  const SignupSuccess = (valueSignup) => {
    setSaveDataLogin({
      email: valueSignup.email,
      password: valueSignup.password,
    });
    setCurrentStep({
      step1: false,
      step2: true,
    });
  };

  const handleClickBack = () => {
    setIsClickSubmit(false);
    setCurrentStep({
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
    alert("Login Error");
  };

  return (
    <div className="App">
      {currentStep.step1 && (
        <Signup
          isClickSubmit={isClickSubmit}
          SignupSuccess={SignupSuccess}
          SignupError={SignupError}
          defaultValue={saveDataLogin}
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
