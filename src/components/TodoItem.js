/* eslint-disable import/no-extraneous-dependencies */
import './todo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import { FaTrashRestore } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const TodoItem = ({ itemProp, checkHandler, delTodo }) => (
  <li className="todo-item">
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => checkHandler(itemProp.id)}
    />
    <p>{itemProp.title}</p>
    <div>
      <AiFillEdit className="i" />
      <button
        type="button"
        onClick={() => {
          delTodo(itemProp.id);
        }}
      >
        <FaTrashRestore className="i" />
      </button>
    </div>
  </li>
);
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoItem.propTypes = {
  checkHandler: PropTypes.func.isRequired,
};
TodoItem.propTypes = {
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
