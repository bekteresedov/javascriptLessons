import React from "react";

const Item = ({ message, id, deleteItem }) => {
  return (
    <React.Fragment>
      <div>
        <span>{message}</span>
        <button onClick={() => deleteItem(id)}>delete</button>
      </div>
    </React.Fragment>
  );
};

export default Item;
