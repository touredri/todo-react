import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './todo.css';
import TodoItem from './TodoItem';

const TodoList = ({ todoProp, checkHandler, delTodo }) => (
  <div className="todo-list">
    <ul>
      {todoProp.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          checkHandler={checkHandler}
          delTodo={delTodo}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todoProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
TodoList.propTypes = {
  checkHandler: PropTypes.func.isRequired,
};
TodoList.propTypes = {
  delTodo: PropTypes.func.isRequired,
};
export default TodoList;
