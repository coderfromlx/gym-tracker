export default function Dashboard({ setPage }: { setPage: (page: string) => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2">
      <button onClick={() => setPage("dashboard")}>🏠</button>
      <button onClick={() => setPage("workout")}>🏋️</button>
      <button onClick={() => setPage("templates")}>📋</button>
      <button onClick={() => setPage("exercises")}>📚</button>
      <button onClick={() => setPage("history")}>📈</button>
    </div>
  );
}