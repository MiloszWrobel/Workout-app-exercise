import { useState, useRef } from "react";
export default function Workout({ title, description, time, onComplete }) {
  const timer = useRef();
  const [workoutStarted, editWorkoutStarted] = useState(false);

  function handleStartWorkout() {
    timer.current = setTimeout(() => {
      onComplete();
      editWorkoutStarted(false);
    }, time / 100);
    editWorkoutStarted(true);
  }

  function handleStopWorkout() {
    clearTimeout(timer.current);
    {
      workoutStarted ? onComplete() : undefined;
    }
    editWorkoutStarted(false);
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
