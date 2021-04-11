import { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";

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
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const reqUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const res = await fetch(reqUrl);
        const resJSON = await res.json();

        const { data, pagination } = resJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(`Failed to fetch post list: ${error}`);
      }
    }
    fetchPostList();
  }, [filters]);

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

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  const handleFiltersChange = (newFilters) => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  };

  return (
    <div className="app">
      <h1>React hooks - Todolist</h1>

      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
