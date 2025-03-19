import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput />
      <Filter />
      <TaskList />
    </div>
  );
};

export default App;