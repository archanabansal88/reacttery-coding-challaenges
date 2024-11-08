/*Write a component that implements a timer. The component should display the elapsed time in minutes and seconds, formatted as "MM:SS". 
The timer should start at 0 and increase by 1 second every second.*/
import { useState, useEffect } from "react";

const TimerII = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}: ${seconds}`;
  };

  return <div>{formatTime(timer)}</div>;
};

export default TimerII;
