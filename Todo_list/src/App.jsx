import React from "react";
import { TaskProvider } from "./context/TaskContext";
import Input from './components/input.jsx';
import TaskList from "./components/TaskList";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-6">📝 To-Do List</h1>
        <Input />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
