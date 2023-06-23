import React from "react";

const Button = ({ onClickButton }) => {
  return (
    <React.Fragment>
      <button onClick={() => onClickButton()}>Add</button>
    </React.Fragment>
  );
};

export default Button;
