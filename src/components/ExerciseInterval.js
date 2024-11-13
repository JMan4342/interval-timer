import { useState, useEffect } from "react";

export const ExerciseInterval = () => {
  const [exerciseSeconds, setExerciseSeconds] = useState(0);
  const [restSeconds, setRestSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let exerciseInterval = null;
    let restInterval = null;
    if (isActive && exerciseSeconds > 0 && restSeconds > 0) {
      exerciseInterval = setInterval(() => {
        setExerciseSeconds((exerciseSeconds) => exerciseSeconds - 1);
      }, 1000);
    } else if (isActive && exerciseSeconds > 0 && restSeconds === 0) {
      exerciseInterval = setInterval(() => {
        setExerciseSeconds((exerciseSeconds) => exerciseSeconds - 1);
      }, 1000);
    } else if (isActive && exerciseSeconds === 0 && restSeconds > 0) {
      clearInterval(exerciseInterval);
      restInterval = setInterval(() => {
        setRestSeconds((restSeconds) => restSeconds - 1);
      }, 1000);
      //   setIsActive(false);
    } else if (isActive && exerciseSeconds === 0 && restSeconds === 0) {
      clearInterval(restInterval);
      setIsActive(false);
    }
    return () => {
      clearInterval(exerciseInterval);
      clearInterval(restInterval);
    };
  }, [isActive, exerciseSeconds, restSeconds]);

  return (
    <>
      <div class="container">
        <div class="row">
          <label>Exercise</label>
          <input
            type="number"
            name="exerciseSeconds"
            value={exerciseSeconds}
            onChange={(e) => setExerciseSeconds(e.target.value)}
          />
        </div>
        <div class="row">
          <label>Rest</label>
          <input
            type="number"
            name="restSeconds"
            value={restSeconds}
            onChange={(e) => setRestSeconds(e.target.value)}
          />
        </div>
        <div class="row">
          <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
        </div>
      </div>
    </>
  );
};
