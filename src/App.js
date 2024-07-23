import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTasks(savedTasks);
    setCompletedTasks(savedCompletedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, id: Date.now() }]);
  };

  const completeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    const completedTask = tasks.find(task => task.id === id);
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, { ...completedTask, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const clearTasks = () => {
    if (window.confirm('기록되었던 모든 내역이 삭제됩니다. 삭제하시겠습니까?')) {
      setTasks([]);
      setCompletedTasks([]);
    }
  };

  return (
      <div className="App">
        <Header />
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
        <button className="toggle-button" onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? '완료한 할 일 숨기기' : '완료한 할 일 보기'}
        </button>
        {showCompleted && <TaskList tasks={completedTasks} completed />}
        <button className="clear-button" onClick={clearTasks}>모든 내역 삭제하기</button>
      </div>
  );
};

export default App;
