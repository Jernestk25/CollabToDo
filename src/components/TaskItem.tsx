interface TaskItemProps {
  title: string;
  completed: boolean;
}

export default function TaskItem({ title, completed }: TaskItemProps) {
  return (
    <div
      className={`p-4 rounded-xl shadow-md transition-all ${
        completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
}
