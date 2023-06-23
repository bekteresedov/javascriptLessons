import { useState } from "react";
import "./App.css";
import Button from "./components/button/button";
import Input from "./components/input/input";
import Item from "./components/item/item";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const onClickButton = () => {
    if (!text.length) {
      alert("Please enter a text");
      return;
    }
    const todo = {
      id: Math.floor(Math.random() * 1000),
      message: text,
    };

    setItems((old) => [...old, todo]);
    console.log(items);
  };

  const deleteItem = (id) => {
    const result = items.filter((item) => item.id !== id);
    setItems(result);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <Input setText={setText} />
        <Button onClickButton={onClickButton} />
      </div>
      <div className="items">
        {items.map((item) => (
          <Item
            deleteItem={deleteItem}
            key={item.id}
            message={item.message}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
