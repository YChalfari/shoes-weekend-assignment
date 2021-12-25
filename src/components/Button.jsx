import React from "react";
import "./button.css";

const Button = ({ text, type, shoe, onClick }) => {
  const handleClick = () => {
    console.log(shoe);
    onClick(shoe);
  };
  return (
    <button onClick={handleClick} className="btn">
      {text}
    </button>
  );
};
export default Button;
