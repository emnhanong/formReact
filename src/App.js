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
  
  const [isCheckInputField, setIsCheckInputField] = useState({
    email: "",
    password: "",
  });

  const [isSaveValueSignup, setIsSaveValueSignup] = useState({
    email: "",
    password:"",
    confirmPassword:""
  })

  const handleClickSubmit = () => {
    setIsClickSubmit(true);
  };

  const handleSubmitError = (param) => {
    setIsClickSubmit(false);
    console.log(param);
  };
  
  const handleSubmitSuccess = (valueSignup) => {
    setIsCheckInputField({
      ...isCheckInputField,
      email: valueSignup.email,
      password: valueSignup.password,
    });
    setCurrentStep({
      ...setCurrentStep,
      step1: false,
      step2: true,
    });
    setIsSaveValueSignup({
      ...isSaveValueSignup,
      email: valueSignup.email,
      password: valueSignup.password,
      confirmPassword: valueSignup.confirmPassword
    })
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
  }

  const loginSuccess = (value) => {
    setIsClickLogin(false)
    console.log("login Success");
    console.log(value);
  }

  const loginError = () => {
    setIsClickLogin(false)
    console.log('login Error');
  }

  return (
    <div className="App">
      {currentStep.step1 && (
        <Signup
          currentStep={currentStep}
          isClickSubmit={isClickSubmit}
          handleSubmitSuccess={handleSubmitSuccess}
          handleSubmitError={handleSubmitError}
          isSaveValueSignup={isSaveValueSignup}
        />
      )}

      {currentStep.step1 && (
        <Button name="Next" handleClickBtn={handleClickSubmit} />
      )}

      {currentStep.step2 && (
        <Login
          isCheckInputField={isCheckInputField}
          handleSubmitSuccess={handleSubmitSuccess}
          isClickLogin={isClickLogin}
          loginSuccess={loginSuccess}
          loginError={loginError}
        />
      )}

      {currentStep.step2 && (
        <div className="wrap-btn">
          <Button name="Submit" handleClickBtn={handleGetValueInputSignup}/>
          <Button name="Back" handleClickBtn={handleClickBack} />
        </div>
      )}
    </div>
  );
};

export default App;
