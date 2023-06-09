import './todo.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

const TodoLogics = () => {
  const lastTodo = () => {
    const data = localStorage.getItem('todo');
    return JSON.parse(data) || [];
  };

  const [todos, setTodos] = useState(lastTodo());
  const checkHandler = (id) => {
    setTodos((e) => {
      const newTodos = e.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const delTodo = (id) => {
    setTodos((e) => {
      const newTodos = e.filter((todo) => todo.id !== id);
      return newTodos;
    });
  };

  const addtask = (task) => {
    if (!task) return;
    const newTodo = {
      id: uuidv4(),
      title: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const changeTask = (newtask, id) => {
    if (!newtask) return;
    setTodos((e) => {
      const newTodos = e.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newtask,
          };
        }
        return todo;
      });
      return newTodos;
    });
  };

  return (
    <div className="todo-logics">
      <InputTodo todoProp={todos} addItem={addtask} />
      <TodoList
        todoProp={todos}
        checkHandler={checkHandler}
        delTodo={delTodo}
        changeTask={changeTask}
      />
    </div>
  );
};

export default TodoLogics;
