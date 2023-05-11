// Components
import { Signup } from "./Signup";
import { Login } from "./Login";
import { TodosIndex } from "./TodosIndex";
import { ListsIndex } from "./ListsIndex";
import { TodosNew } from "./TodosNew";
import { ListsNew } from "./ListsNew";
import { Modal } from "./Modal";
import { TodosShow } from "./TodoShow";
// Other imports
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

export function Content() {
  // Variables
  const [todos, setTodos] = useState([]);
  const [lists, setLists] = useState([]);
  const location = useLocation();
  const list_id = new URLSearchParams(location.search).get("list_id");
  const [isTodosShowVisible, setIsTodosShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  // Opening and Closing Modal
  const handleShowTodo = (todo) => {
    console.log("handleShowTodo", todo);
    setIsTodosShowVisible(true);
    setCurrentTodo(todo);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTodosShowVisible(false);
  };

  // Getting data from index todos
  const handleIndexTodos = (list_id) => {
    axios.get(`http://localhost:3000/todos.json?list_id=${list_id}`).then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  useEffect(() => {
    if (list_id) {
      handleIndexTodos(list_id);
    }
  }, [list_id]);

  // Getting data from index lists
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

  // Creating a new List
  const handleCreateList = (params) => {
    console.log("handleCreateList", params);
    axios.post("http://localhost:3000/lists.json", params).then((response) => {
      setLists([...lists, response.data]);
    });
  };

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
          <div className="container">
            <div className="row">
              <div className="col-4">
                <ListsNew onCreateList={handleCreateList} />
                <ListsIndex lists={lists} />
              </div>
              <div className="col-8">
                <h4>Create a New Task</h4>
                <TodosNew onCreateTodo={handleCreateTodo} />
                <h5>My Tasks</h5>
                <TodosIndex todos={todos} onShowTodo={handleShowTodo} />
                <Modal show={isTodosShowVisible} onClose={handleClose}>
                  <TodosShow todo={currentTodo} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
