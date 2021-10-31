import React from "react";
import "../Input/Input.css";

const Input = (props) => {
  const { name, value, placeholder, type, handleInput, disabled } = props;
  return (
    <div className="input">
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        className="input"
        onChange={handleInput}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
