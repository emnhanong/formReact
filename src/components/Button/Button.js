import React from 'react';
import '../Button/Button.css';

const Button = (props) => {
  const {name, handleClickBtn} = props;
  return (
    <div className="button">
      <button onClick = {handleClickBtn}>
          {name}
      </button>
    </div>
  );
}

export default Button;