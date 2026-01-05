import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ThemeToggle from './components/ThemeToggle';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light');
  const [color, setColor] = useState('#3498db');

  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <div className={`app ${theme}`} style={{ backgroundColor: color }}>
      <h1>Task Manager</h1>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <ColorPicker color={color} setColor={setColor} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;