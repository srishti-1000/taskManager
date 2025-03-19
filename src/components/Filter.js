import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasksSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))}>All</button>
      <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('pending'))}>Pending</button>
    </div>
  );
};

export default Filter;