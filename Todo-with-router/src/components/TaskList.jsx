import React, { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

function TaskList({ tasks, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newStatus, setNewStatus] = useState('On Progress');

  const startEdit = (task) => {
    setEditingId(task.id);
    setNewTitle(task.title);
    setNewStatus(task.status);
  };

  const handleUpdate = (id) => {
    onUpdate({ id, title: newTitle, status: newStatus });
    setEditingId(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks available.</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded shadow">
            {editingId === task.id ? (
              <div className="flex-1 mr-4">
                <input 
                  className="p-2 border mr-2 rounded" 
                  value={newTitle} 
                  onChange={(e) => setNewTitle(e.target.value)} 
                />
                <select 
                  className="p-2 border rounded"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                >
                  <option>On Progress</option>
                  <option>Completed</option>
                  <option>Viewed</option>
                </select>
              </div>
            ) : (
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{task.title}</h3>
                <p className="text-gray-600">Status: {task.status}</p>
              </div>
            )}
            <div className="flex space-x-2">
              {editingId === task.id ? (
                <button 
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  onClick={() => handleUpdate(task.id)}
                >
                  Save
                </button>
              ) : (
                <button 
                  onClick={() => startEdit(task)} 
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil />
                </button>
              )}
              <button 
                onClick={() => onDelete(task.id)} 
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
