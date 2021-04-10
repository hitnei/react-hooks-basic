import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  const handleClick = (id) => {
    if (onTodoClick) {
      onTodoClick(id);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo.id)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
