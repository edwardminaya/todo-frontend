// Components
import { Signup } from "./Signup";
import { Login } from "./Login";
import { TodosIndex } from "./TodosIndex";
import { ListsIndex } from "./ListsIndex";
import { TodosNew } from "./TodosNew";
// Other imports
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

export function Content() {
  // Variables
  const [todos, setTodos] = useState([]);
  const [lists, setLists] = useState([]);

  //Getting data from index todos
  const handleIndexTodos = () => {
    axios.get("http://localhost:3000/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  //Getting data from index lists
  const handleIndexLists = () => {
    axios.get("http://localhost:3000/lists.json").then((response) => {
      console.log(response.data);
      setLists(response.data);
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
  useEffect(handleIndexLists, []);

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
          <ListsIndex lists={lists} />
          <TodosNew onCreateTodo={handleCreateTodo} />
          <TodosIndex todos={todos} />
        </div>
      )}
    </div>
  );
}
