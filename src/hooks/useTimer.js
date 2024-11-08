import { useState, useEffect } from "react";

const useTimer = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const reset = () => {
    setCount(initialCount);
    setIsRunning(false);
  };
  return { start, stop, reset, count, isRunning };
};

export default useTimer;
