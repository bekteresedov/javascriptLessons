import React from "react";

const Input = ({ setText }) => {
  return (
    <React.Fragment>
      <div>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
