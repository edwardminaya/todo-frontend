// Components
import { Signup } from "./Signup";
import { Login } from "./Login";
import { TodosIndex } from "./TodosIndex";
import { TodosNew } from "./TodosNew";
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

  // Creating a new task
  const handleCreateTodo = (params) => {
    console.log("handleCreateTodo", params);
    axios.post("http://localhost:3000/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
    });
  };

  useEffect(handleIndexTodos, []);

  //View
  return (
    <div className="container">
      {localStorage.jwt == undefined ? (
        <div>
          <h1>Welcome! Login or Signup</h1>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <div>
          <h1>Welcome back!</h1>
          <TodosNew onCreateTodo={handleCreateTodo} />
          <Routes>
            <Route path="/mytasks" element={<TodosIndex todos={todos} />} />
          </Routes>
        </div>
      )}
    </div>
  );
}
