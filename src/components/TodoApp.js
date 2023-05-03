import './todo.css';
import Header from './Header';
import TodoLogics from './TodoLogics';

const TodoApp = () => (
  <div className="todo-app">
    <Header />
    <TodoLogics />
  </div>
);

export default TodoApp;
