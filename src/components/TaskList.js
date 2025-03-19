import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask, fetchTasks } from '../features/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;