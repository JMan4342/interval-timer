import { useState, useEffect } from "react";

export const ExerciseInterval = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
      setIsActive(!isActive);
  }

  useEffect(() => {
      let interval = null;
      if (isActive) {
          interval = setInterval(() => {
              setSeconds(seconds => seconds - 1);
          }, 1000)
      } else if (isActive && seconds ===0) {
          clearInterval(interval);
      }
      return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <label>
        <input type="number" name="seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)}/>
      </label>
      <button onClick={toggle}>Start</button>
    </>
  );
};
