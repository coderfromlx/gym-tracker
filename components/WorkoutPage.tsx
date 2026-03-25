import { useState } from "react";

type Difficulty = "easy" | "medium" | "hard" | null;

type SetType = {
  weight: string;
  reps: string;
};

type ExerciseType = {
  id: number;
  name: string;
  last: string;
  lastDifficulty: "easy" | "medium" | "hard";
  difficulty: Difficulty;
  sets: SetType[];
};

type WorkoutType = {
  name: string;
  exercises: ExerciseType[];
};

const difficultyColors: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  hard: "bg-red-100 text-red-700",
};

const dummyWorkout: WorkoutType = {
  name: "Push Day",
  exercises: [
    {
      id: 1,
      name: "Barbell Bench Press",
      last: "80kg x 8",
      lastDifficulty: "medium",
      difficulty: null,
      sets: [
        { weight: "80", reps: "8" },
        { weight: "80", reps: "8" },
        { weight: "80", reps: "8" },
      ],
    },
  ],
};

export default function WorkoutPage({ setPage }: { setPage: (page: string) => void }) {
  const [workout, setWorkout] = useState<WorkoutType>(dummyWorkout);

  const updateSet = (
    i: number,
    j: number,
    field: "weight" | "reps",
    value: string
  ) => {
    const updated = { ...workout };
    updated.exercises[i].sets[j][field] = value;
    setWorkout(updated);
  };

  const setDifficulty = (i: number, level: Difficulty) => {
    const updated = { ...workout };
    updated.exercises[i].difficulty = level;
    setWorkout(updated);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{workout.name}</h1>

      {workout.exercises.map((ex, i) => (
        <div key={ex.id} className="bg-white rounded-2xl shadow p-4 mb-4">
          <h2 className="text-lg font-semibold">{ex.name}</h2>

          <div className="flex gap-2 text-sm mb-2">
            <span>Last: {ex.last}</span>
            <span className={`px-2 rounded ${difficultyColors[ex.lastDifficulty]}`}>
              {ex.lastDifficulty}
            </span>
          </div>

          {ex.sets.map((set, j) => (
            <div key={j} className="flex gap-2 mb-2">
              <input
                className="w-1/2 p-2 border rounded-lg"
                value={set.weight}
                onChange={(e) => updateSet(i, j, "weight", e.target.value)}
              />
              <input
                className="w-1/2 p-2 border rounded-lg"
                value={set.reps}
                onChange={(e) => updateSet(i, j, "reps", e.target.value)}
              />
            </div>
          ))}

          <div className="flex gap-2 mt-2">
            {["easy", "medium", "hard"].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(i, d as Difficulty)}
                className={`px-3 py-1 rounded ${
                  ex.difficulty === d ? difficultyColors[d] : "bg-gray-200"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={() => setPage("dashboard")}
        className="w-full bg-black text-white p-3 rounded-2xl"
      >
        Finish Workout
      </button>
    </div>
  );
}