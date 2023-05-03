import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './todo.css';
import TodoItem from './TodoItem';

const TodoList = ({
  todoProp, checkHandler, delTodo, changeTask,
}) => (
  <div className="todo-list">
    <ul>
      {todoProp.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          checkHandler={checkHandler}
          delTodo={delTodo}
          changeTask={changeTask}
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
  delTodo: PropTypes.func.isRequired,
  changeTask: PropTypes.func.isRequired,
};
export default TodoList;
