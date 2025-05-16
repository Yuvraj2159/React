import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

function Input() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleAdd = () => {
    if (text.trim()) {
      addTask(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-80"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default Input;
