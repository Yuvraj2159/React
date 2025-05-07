import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Buy groceries', completed: true },
    { text: 'Finish homework', completed: false },
    { text: 'Call a friend', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      // setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setTasks([{ text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const editTask = (index) => {
    
  }

  return (
    <div className="w-full min-h-[100vh] bg-slate-500 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">To-Do List</h2>

        {/* Input Section */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>

       
      </div>
    </div>
  );
}

export default App;
