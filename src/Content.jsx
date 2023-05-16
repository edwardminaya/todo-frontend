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

  // Update Task
  const handleUpdateTask = (id, params) => {
    console.log("handleUpdateTask", params);
    axios.patch(`http://localhost:3000/todos/${id}.json`, params).then((response) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data;
          } else {
            return todo;
          }
        })
      );
      handleClose();
    });
  };

  // Delete Task
  const handleDestroyTodo = (todo) => {
    console.log("handleDestroyTodo", todo);
    axios.delete(`http://localhost:3000/todos/${todo.id}.json`).then((response) => {
      setTodos(todos.filter((t) => t.id !== todo.id));
      console.log(response);
      handleClose();
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
          <h1>Welcome to Just Do It</h1>
          <h3>We keep track of your tasks, you just have to do it.</h3>
          <h5>Sign Up or Login to get start!</h5>
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

                <TodosIndex todos={todos} setTodos={setTodos} onShowTodo={handleShowTodo} lists={lists} />
                <Modal show={isTodosShowVisible} onClose={handleClose}>
                  <TodosShow todo={currentTodo} onUpdateTodo={handleUpdateTask} onDestroyTodo={handleDestroyTodo} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
