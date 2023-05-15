import { useState } from "react";

/* eslint-disable react/prop-types */
export function TodosShow(props) {
  const [editing, setEditing] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTodo(props.todo.id, params, () => {
      setEditing(false);
      event.target.reset();
    });
  };

  const handleClick = () => {
    props.onDestroyTodo(props.todo);
    window.location.reload();
  };
  return (
    <div>
      {editing ? (
        <div className="update-form">
          <form onSubmit={handleSubmit}>
            <div className="task-name">
              <input
                className="form-control form-control-sm"
                defaultValue={props.todo.title}
                name="title"
                type="text"
                placeholder="Task Name"
              />
            </div>
            <div className="task-description">
              <input
                className="form-control form-control-sm"
                defaultValue={props.todo.details}
                name="details"
                type="text"
                placeholder="Description"
              />
            </div>
            <div>
              Due Date <input defaultValue={props.todo.due_date} name="due_date" type="date" />
            </div>
            <div className="buttons">
              <button id="update-delete-button" type="submit">
                Update
              </button>
              <button id="update-delete-button" onClick={handleClick}>
                <img id="delete" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />
              </button>
              <button id="update-delete-button" type="button" onClick={() => setEditing(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h5>Title: {props.todo.title}</h5>
          <p>Description: {props.todo.details}</p>
          <p>Due Date: {props.todo.due_date}</p>
          <button type="button" onClick={() => setEditing(true)}>
            <img id="update" src="https://cdn-icons-png.flaticon.com/512/94/94676.png" />
          </button>
        </div>
      )}
    </div>
  );
}
