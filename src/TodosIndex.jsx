/* eslint-disable react/prop-types */
export function TodosIndex(props) {
  return (
    <div className="todos-index">
      {props.todos.map((todo) => (
        <div key={todo.id} className="container" id="task-row">
          <div className="row justify-items-start" id="task">
            <div className="col-1" id="checkbox">
              <input type="checkbox"></input>
            </div>
            <div className="col-6" id="title">
              <p>{todo.title}</p>
            </div>
            <div className="col-5">{todo.due_date != "" ? <p>Due Date: {todo.due_date}</p> : <></>}</div>
          </div>
          <button onClick={() => props.onShowTodo(todo)}>Details</button>
        </div>
      ))}
    </div>
  );
}
