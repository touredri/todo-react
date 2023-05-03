import './todo.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { FaTrashRestore } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';

const TodoItem = ({
  itemProp, checkHandler, delTodo, changeTask,
}) => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#F8F4F4',
    textDecoration: 'line-through',
  };
  const editMode = {};
  const viewMode = {};
  if (edit) {
    editMode.display = 'none';
  } else {
    viewMode.display = 'none';
  }
  const handleChangeDone = (event) => {
    if (event.key === 'Enter') setEdit(false);
  };
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="check"
        checked={itemProp.completed}
        onChange={() => checkHandler(itemProp.id)}
      />
      <div style={editMode}>
        <p style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </p>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className="edit"
        style={viewMode}
        onChange={(e) => changeTask(e.target.value, itemProp.id)}
        onKeyDown={handleChangeDone}
      />
      <div>
        <button type="button" onClick={handleEdit}>
          <AiFillEdit className="i" />
        </button>
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
};
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

TodoItem.propTypes = {
  checkHandler: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  changeTask: PropTypes.func.isRequired,
};

export default TodoItem;
