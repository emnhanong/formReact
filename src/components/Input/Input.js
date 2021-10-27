import React from "react";
import "../Input/Input.css";

const Input = (props) => {
  const { value, placeholder, type, handleChangeInput } = props;
  return (
    <div className="input">
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        className="input"
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default Input;
