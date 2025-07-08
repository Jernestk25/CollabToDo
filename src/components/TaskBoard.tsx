import TaskItem from "./TaskItem";

const mockTasks = [
  { title: "Setup project", completed: true },
  { title: "Add auth", completed: true },
  { title: "CRUD tasks", completed: false },
];

export default function TaskBoard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {mockTasks.map((task, idx) => (
        <TaskItem key={idx} {...task} />
      ))}
    </div>
  );
}
