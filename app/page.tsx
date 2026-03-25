"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
import WorkoutPage from "../components/WorkoutPage";
import TemplatesPage from "../components/TemplatesPage";
import ExercisesPage from "../components/ExercisesPage";
import HistoryPage from "../components/HistoryPage";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-20">
      {page === "dashboard" && <Dashboard setPage={setPage} />}
      {page === "workout" && <WorkoutPage setPage={setPage} />}
      {page === "templates" && <TemplatesPage />}
      {page === "exercises" && <ExercisesPage />}
      {page === "history" && <HistoryPage />}

      <NavBar setPage={setPage} />
    </div>
  );
}