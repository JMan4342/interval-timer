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
        <div class="row my-1">
          <label
            for="exerciseInterval"
            class="form-label col-sm-12 d-flex justify-content-start"
          >
            Exercise
          </label>
          <input
            id="exerciseInterval"
            type="number"
            name="exerciseSeconds"
            class="form-control text-center w-25 col-sm-12"
            value={exerciseSeconds}
            onChange={(e) => setExerciseSeconds(e.target.value)}
          />
        </div>
        <div class="row my-1">
          <label
            for="restInterval"
            class="form-label col-sm-12 d-flex justify-content-start"
          >
            Rest
          </label>
          <input
            id="restInterval"
            type="number"
            name="restSeconds"
            class="form-control text-center w-25 col-sm-12"
            value={restSeconds}
            onChange={(e) => setRestSeconds(e.target.value)}
          />
        </div>
        <button
          class="btn btn-primary d-flex justify-content-start"
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </>
  );
};
