import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('On Progress');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, status });
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Task Title" 
          className="w-full p-2 border mb-4 rounded" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <select 
          className="w-full p-2 border mb-4 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>On Progress</option>
          <option>Completed</option>
          <option>Viewed</option>
        </select>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
