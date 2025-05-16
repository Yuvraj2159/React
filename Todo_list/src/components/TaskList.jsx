import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useTasks();

  if (!tasks.length) return <p className="text-gray-500">No tasks added yet.</p>;

  return (
    <div className="w-full max-w-md space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
