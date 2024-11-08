/*Write a custom hook called useTimer that manages a timer starting from the provided value (in seconds). 
The hook should be able to store and manage information about whether the timer is currently running, and the current count of the timer.
It should return an object with four properties.
*/
import styled from "styled-components";
import useTimer from "../../hooks/useTimer";

const TimerI = () => {
  const { start, stop, reset, isRunning, count } = useTimer(0);

  return (
    <AppWrapper>
      <h1>Timer App</h1>
      <TimerWrapper>
        <h2>Count: {count}</h2>
        <div>
          <Button onClick={start}>Start</Button>
          <Button onClick={stop}>Stop</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </TimerWrapper>
      <h2>{isRunning && "Timer is active"}</h2>
    </AppWrapper>
  );
};

export default TimerI;

const AppWrapper = styled.div`
  background-color: "#fff";
  color: "#333";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
