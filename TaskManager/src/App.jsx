import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation, Link } from 'react-router-dom';
import TaskManager from './components/TaskManager';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Router>
      <MainContent 
        tasks={tasks} 
        addTask={addTask} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
      />
    </Router>
  );
}

function MainContent({ tasks, addTask, updateTask, deleteTask }) {
  const location = useLocation();
  const path = location.pathname;

  const filter = 
    path === '/completed' ? 'Completed' : 
    path === '/on-progress' ? 'On Progress' :  
    path === '/new-task' ? 'New Task' : 
    '';

  return (
    <div>
      {/* Centered Navbar */}
      <nav className="bg-gray-800 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </nav>

      

      {/* Task Manager Always Visible */}
      <TaskManager 
        tasks={tasks} 
        onAdd={addTask} 
        onUpdate={updateTask} 
        onDelete={deleteTask} 
        filter={filter} 
      />
    </div>
  );
}

export default App;
