import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./Components/ColorBox/ColorBox";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend" },
    { id: 2, title: "We love Easy Frontend" },
    { id: 3, title: "They love Easy Frontend" },
  ]);
  return (
    <div className="app">
      <h1>Welcome to React hooks!</h1>
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
