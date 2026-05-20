import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTimer(0);
  };
  return (
    <>
      <h1>{timer}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default StopWatch;
