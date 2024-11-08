/*Write a simple component that returns an input field of type text. Users can interact with the input 
field to type in any string they want. You’re meant to store this string in local storage so that every time when the page 
reloads it pre-fills the input field with the latest known value for the users.*/
import { useState } from "react";

const InputLocalStorage = () => {
  const initialState = localStorage.getItem("inputItem");
  const [textEntered, setTextEntered] = useState(initialState);

  const handleChange = (e) => {
    localStorage.setItem("inputItem", e.target.value);
    setTextEntered(e.target.value);
  };

  return (
    <div>
      <input type="text" value={textEntered} onChange={handleChange} />
    </div>
  );
};

export default InputLocalStorage;
