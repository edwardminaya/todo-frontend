import axios from "axios";
/* eslint-disable react/prop-types */

export function TodosIndex(props) {
  const handleToggleDone = (todo) => {
    const updatedTodo = { ...todo, done: !todo.done };
    axios.patch(`http://localhost:3000/todos/${todo.id}.json`, updatedTodo).then((response) => {
      const updatedTodos = props.todos.map((t) => (t.id === response.data.id ? response.data : t));
      props.setTodos(updatedTodos);
    });
    window.location.reload();
  };

  return (
    <div className="todos-index">
      <h5>
        {props.lists.map((list) => (
          <div key={list.id}>{list.list_name}</div>
        ))}
      </h5>
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
                  {todo.due_date}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="col-2">
              <button onClick={() => props.onShowTodo(todo)}>Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
