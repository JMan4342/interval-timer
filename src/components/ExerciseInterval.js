import { useState, useEffect } from "react";

export const ExerciseInterval = () => {
  const [timer, setTimer] = useState("00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  useEffect(() => {
    startTimer(timer());
  }, []);

  return (
    <>
      <label>
        <input type="number" value={minutes} />
      </label>
      <label>
        <input type="number" value={seconds} />
      </label>
      <button onClick={startTimer}>Start</button>
    </>
  );
};
