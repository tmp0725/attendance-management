import React from 'react';
import './Button.css';

const Button = ({ content, onButtonClick }) => {
  return (
    <div className={`Button ${content === "0" ? "zero" : ""}`} onClick={onButtonClick(content)}>
      {content}
    </div>
  )
}

export default Button;