// Components
import { TodosIndex } from "./TodosIndex";
// Other imports
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

export function Content() {
  // Variables
  const [todos, setTodos] = useState([]);

  //Getting data from index todos
  const handleIndexTodos = () => {
    axios.get("http://localhost:3000/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  useEffect(handleIndexTodos, []);

  //View
  return (
    <div className="container">
      <h1>Todo List</h1>
      <Routes>
        <Route path="/" element={<TodosIndex todos={todos} />} />
      </Routes>
    </div>
  );
}
