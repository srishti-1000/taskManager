import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;