import { useState } from "react/cjs/react.development";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Button from "./components/Button/Button";

const App = () => {
  const [btn, setBtn] = useState(true);
  const [value, setValue] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [valueConfirm, setValueConfirm] = useState("");
  const [valueLoginPass, setValueLoginPass] = useState("");

  const handleBtnNext = () => {
    if (value === "") {
      alert("You need to enter your email");
    } else if (valuePass === "" || valueConfirm === "") {
      alert("You need enter your password");
    } else if (valuePass === valueConfirm) {
      setBtn(!btn);
    } else {
      alert("Wrong password please re-enter");
    }
  };

  const handleSaveValue = (e) => {
    setValue(e.target.value);
  };

  const handleValuePass = (e) => {
    setValuePass(e.target.value);
  };

  const handleValueConfirm = (e) => {
    setValueConfirm(e.target.value);
  };

  const handleValueLoginPass = (e) => {
    setValueLoginPass(e.target.value);
  };

  const handleSubmit = () => {
    if (valuePass === valueLoginPass) {
      alert("Email is:" + value);
      alert("Password is:" + valuePass);
    } else {
      alert("Incorrect password, enter it again");
    }
  };

  return (
    <div className="App">
      {btn ? (
        <Signup
          value={value}
          valuePass={valuePass}
          valueConfirm={valueConfirm}
          handleSaveValue={handleSaveValue}
          handleValuePass={handleValuePass}
          handleValueConfirm={handleValueConfirm}
        />
      ) : (
        <Login
          value={value}
          handleSaveValue={handleSaveValue}
          handleValueLoginPass={handleValueLoginPass}
          valueLoginPass={valueLoginPass}
        />
      )}

      {btn ? (
        <Button name="Next" handleClickBtn={handleBtnNext} />
      ) : (
        <div className="wrap-btn">
          <Button name="Submit" handleClickBtn={handleSubmit} />
          <Button name="Back" handleClickBtn={handleBtnNext} />
        </div>
      )}
    </div>
  );
};

export default App;
