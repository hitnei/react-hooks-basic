import { useState } from "react";
import "./App.scss";
import TodoList from "./components/ColorBox/TodoList";

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
    console.log("🚀 ~ file: App.js ~ line 27 ~ handleTodoClick ~ index", index);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="app">
      <h1>React hooks - Todolist</h1>

      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
