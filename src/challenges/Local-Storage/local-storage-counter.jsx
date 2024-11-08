/*
You are given a simple Counter component that displays a count and two buttons to increment and decrement the count. 
You need to modify the component to store the count in the browser's local storage so that the count is persisted even when the page is refreshed.
*/
import { useState } from "react";
const Counter = () => {
  const initialCount = localStorage.getItem("savedCount");
  const [count, setCount] = useState(() =>
    initialCount ? parseInt(initialCount) : 0
  );

  const handleClick = (count) => {
    localStorage.setItem("savedCount", count);
    setCount(count);
  };
  return (
    <div>
      <h2 data-testid="count-id">Count: {count}</h2>
      <button data-testid="inc-id" onClick={() => handleClick(count + 1)}>
        +
      </button>
      <button data-testid="dec-id" onClick={() => handleClick(count - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
