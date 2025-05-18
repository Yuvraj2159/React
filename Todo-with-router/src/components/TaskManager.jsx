import React, { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

function TaskManager({ tasks, onAdd, onUpdate, onDelete, filter }) {
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, status: 'New Task' });
    setTitle('');
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return;

    onUpdate({ id: editingId, title: editTitle, status: 'On Progress' });
    setEditingId(null);
    setEditTitle('');
  };

  const markAsCompleted = (task) => {
    if (task.status !== 'Completed') {
      onUpdate({ ...task, status: 'Completed' });
    }
  };

  const markAsOnProgress = (task) => {
    if (task.status === 'New Task') {
      onUpdate({ ...task, status: 'On Progress' });
    }
  };

  const filteredTasks = filter ? tasks.filter(task => task.status === filter) : tasks;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">{filter || 'All'} Tasks</h2>

      {/* Add Task Form Only on All Tasks View */}
      {!filter && (
        <form onSubmit={handleAdd} className="mb-6">
          <input 
            type="text" 
            placeholder="Enter Task Title" 
            className="w-full p-2 border mb-4 rounded shadow" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Add Task
          </button>
        </form>
      )}

      {filteredTasks.length === 0 ? (
        <p className="text-gray-600 text-center">No tasks found.</p>
      ) : (
        filteredTasks.map(task => (
          <div 
            key={task.id} 
            className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded shadow hover:bg-gray-200 cursor-pointer"
            onClick={() => markAsOnProgress(task)}
          >
            <div className="flex items-center space-x-3 flex-1">
              {/* Checkbox to Mark as Completed */}
              <input 
                type="checkbox" 
                checked={task.status === 'Completed'}
                onChange={() => markAsCompleted(task)} 
                disabled={task.status === 'Completed'}
                className="w-5 h-5 cursor-pointer"
              />

              <div>
                {editingId === task.id ? (
                  <form onSubmit={handleUpdate} className="flex space-x-2">
                    <input 
                      type="text" 
                      className="p-2 border rounded w-full" 
                      value={editTitle} 
                      onChange={(e) => setEditTitle(e.target.value)} 
                    />
                    <button 
                      type="submit" 
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  </form>
                ) : (
                  <>
                    <h3 className={`text-xl font-semibold ${task.status === 'Completed' ? 'line-through text-gray-500' : ''}`}>
                      {task.title}
                    </h3>
                    <p className="text-gray-600">Status: {task.status}</p>
                  </>
                )}
              </div>
            </div>

            <div className="flex space-x-2">
              {/* Edit Button Only for Not Completed Tasks */}
              {task.status !== 'Completed' && editingId !== task.id && (
                <button 
                  onClick={(e) => { e.stopPropagation(); handleEdit(task); }} 
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit Task"
                >
                  <Pencil size={24} />
                </button>
              )}
              <button 
                onClick={(e) => { e.stopPropagation(); onDelete(task.id); }} 
                className="text-red-600 hover:text-red-800"
                title="Delete Task"
              >
                <Trash2 size={24} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskManager;
