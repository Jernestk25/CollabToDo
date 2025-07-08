import TaskBoard from "../components/TaskBoard";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold p-6">My Tasks</h1>
      <TaskBoard />
    </main>
  );
}
