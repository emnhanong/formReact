import { useState } from "react/cjs/react.development";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Button from "./components/Button/Button";

const App = () => {
  const [check, setCheck] = useState(true);
  const [valueInput, setValueInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    loginPassword: "",
  });

  const handleClickBtn = () => {
    if (valueInput.email === "") {
      alert("You need to enter your email");
    } else if (
      valueInput.password === "" ||
      valueInput.confirmPassword === ""
    ) {
      alert("You need enter your password");
    } else if (valueInput.password === valueInput.confirmPassword) {
      setCheck(!check);
    } else {
      alert("Wrong password please re-enter");
    }
  };

  const handleChangeEmail = (e) => {
    setValueInput({ ...valueInput, email: e.target.value });
  };

  const handleChangePassWord = (e) => {
    setValueInput({ ...valueInput, password: e.target.value });
  };

  const handleChangeConfirmPassWord = (e) => {
    setValueInput({ ...valueInput, confirmPassword: e.target.value });
  };

  const handleChangeLoginPassword = (e) => {
    setValueInput({ ...valueInput, loginPassword: e.target.value });
  };

  const handleSubmit = () => {
    if (valueInput.password === valueInput.loginPassword) {
      alert("Email is:" + valueInput.email);
      alert("Password is:" + valueInput.password);
    } else {
      alert("Incorrect password, enter it again");
    }
  };

  return (
    <div className="App">
      {check ? (
        <Signup
          value={valueInput.email}
          handleChangeEmail={handleChangeEmail}
          valuePass={valueInput.password}
          handleChangePassWord={handleChangePassWord}
          valueConfirm={valueInput.confirmPassword}
          handleChangeConfirmPassWord={handleChangeConfirmPassWord}
        />
      ) : (
        <Login
          value={valueInput.email}
          handleChangeEmail={handleChangeEmail}
          valueLoginPass={valueInput.loginPassword}
          handleChangeLoginPassword={handleChangeLoginPassword}
        />
      )}

      {check ? (
        <Button name="Next" handleClickBtn={handleClickBtn} />
      ) : (
        <div className="wrap-btn">
          <Button name="Submit" handleClickBtn={handleSubmit} />
          <Button name="Back" handleClickBtn={handleClickBtn} />
        </div>
      )}
    </div>
  );
};

export default App;
