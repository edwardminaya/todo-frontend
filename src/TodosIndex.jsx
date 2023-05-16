import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */

export function TodosIndex(props) {
  const location = useLocation();
  const [listName, setListName] = useState("");

  // Handles checkbox to complete task
  const handleToggleDone = (todo) => {
    const updatedTodo = { ...todo, done: !todo.done };
    axios.patch(`http://localhost:3000/todos/${todo.id}.json`, updatedTodo).then((response) => {
      const updatedTodos = props.todos.map((t) => (t.id === response.data.id ? response.data : t));
      props.setTodos(updatedTodos);
    });
    window.location.reload();
  };

  // Display list name above all the tasks
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const listId = Number(params.get("list_id"));
    console.log(listId);
    const list = props.lists.find((list) => list.id === listId);
    if (list) {
      setListName(list.list_name);
    }
  }, [props.lists, location.search]);

  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return `${formattedDate}`;
  };

  return (
    <div className="todos-index">
      <h5>{listName}</h5>
      {props.todos.map((todo) => (
        <div key={todo.id} className="container" id="task-row">
          <div className="row justify-items-start" id="task">
            <div className="col-1" id="checkbox">
              <input type="checkbox" checked={todo.done} onChange={() => handleToggleDone(todo)}></input>
            </div>
            <div className="col-4" id="title">
              <p>{todo.title}</p>
            </div>
            <div className="col-5" id="date">
              {todo.due_date != "" ? (
                <p>
                  <img id="calendar" src="https://cdn-icons-png.flaticon.com/512/2886/2886665.png" />
                  {formatDate(todo.due_date)}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="col-2">
              <button onClick={() => props.onShowTodo(todo)}>
                <img
                  id="details"
                  src="https://p.kindpng.com/picc/s/210-2109960_info-info-icon-png-white-transparent-png.png"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
