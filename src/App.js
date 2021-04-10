import { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo",
    },
    {
      id: 2,
      title: "natus suscipit vero, alias et aperiam, officia explicabo.",
    },
    {
      id: 3,
      title:
        "esentium libero quidem quibusdam voluptas natus aperiam, officia explicabo.",
    },
  ]);

  const handleTodoClick = (id) => {
    const index = todoList.findIndex((x) => x.id === id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (value) => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: Math.trunc(Math.random() * Math.pow(10, 10)),
      ...value,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <div className="app">
      <h1>React hooks - Todolist</h1>

      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
