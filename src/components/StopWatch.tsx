import { useEffect, useRef, useState } from "react";

const StopTimer = () => {
  const [time, setTime] = useState(0);
  const [isrunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  //Direct manipulate the DOM
  let timer = useRef(0);

  useEffect(() => {
    if (isrunning && !isPaused) {
      timer.current = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(timer.current);
    }
    //clean the interval
    return () => clearInterval(timer.current);
  }, [isrunning, isPaused]);

  const handleTimer = (event: any) => {
    console.log("START");
    const { name } = event.target;
    if (name === "start") {
      setIsRunning(true);
      setIsPaused(false);
    } else if (name === "pause") {
      setIsPaused(true);
    } else if (name === "stop") {
      setIsRunning(false);
      setIsPaused(false);
      setTime(0);
    }
  };
  const formateTime = (value: number) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    return `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <>
      <h3 style={{ color: "white" }}>Minute Timer:{formateTime(time)}</h3>
      <button name="start" onClick={handleTimer}>
        Start
      </button>
      <button name="pause" onClick={handleTimer}>
        Pause
      </button>
      <button name="stop" onClick={handleTimer}>
        Stop
      </button>
    </>
  );
};
export default StopTimer;
