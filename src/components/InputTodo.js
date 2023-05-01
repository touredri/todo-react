/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import './todo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addItem }) => {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addItem(task);
      setTask('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };
  return (
    <div>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write the task here"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">
          <FaPlusCircle className="i" />
        </button>
      </form>
      <span>{message}</span>
    </div>
  );
};
InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default InputTodo;
