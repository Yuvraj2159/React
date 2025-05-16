import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { CheckCircle, Circle, Edit3, Trash2, Save } from "lucide-react";

function TaskItem({ task }) {
  const { deleteTask, toggleComplete, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex items-center gap-3">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <Circle className="text-gray-400" />
          )}
        </button>
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border-b outline-none"
          />
        ) : (
          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave}>
            <Save className="w-5 h-5 text-blue-500" />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <Edit3 className="w-5 h-5 text-yellow-500" />
          </button>
        )}
        <button onClick={() => deleteTask(task.id)}>
          <Trash2 className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
