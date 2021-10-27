import React from 'react';
import '../Title/Title.css';

const Title = (props) => {
  const {title} = props;
  return (
    <h1>
        {title}
    </h1>
  );
}

export default Title;