/*
Write a component that implements a timer. The component should display the elapsed time in minutes and seconds, formatted as "MM:SS". 
The timer should start at 10 minutes and count down every second. When the timer runs out restart it from 10 minutes again. 
Persist the timer status in the local storage, so that when the user closes the page and comes back to it 5 minutes later, 
the timer picks up where it stopped.
*/
import { useState, useEffect } from "react";

const TimerIII = () => {
  const storedTime = localStorage.getItem("savedTime");
  const [timeRemaining, setTimeRemaining] = useState(() =>
    storedTime ? parseInt(storedTime) : 600
  ); // 10 minutes = 600 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          return 600;
        }
        localStorage.setItem("savedTime", prevTime - 1);
        return prevTime - 1;
      });
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

  return <div>{formatTime(timeRemaining)}</div>;
};

export default TimerIII;
