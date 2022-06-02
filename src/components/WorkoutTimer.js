import { useState, useEffect } from "react";
import { ExerciseInterval } from "./ExerciseInterval";
import { RestInterval } from "./RestInterval";

export const WorkoutTimer = () => {
  return (
    <>
      <ExerciseInterval />
      <RestInterval />
    </>
  );
};
