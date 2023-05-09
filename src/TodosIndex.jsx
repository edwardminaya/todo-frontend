/* eslint-disable react/prop-types */
export function TodosIndex(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <div key={todo.id} className="container text-center">
          <div className="row justify-items-start" id="task">
            <div className="col-11" id="title">
              <p>{todo.title}</p>
            </div>
            <div className="col-1" id="checkbox">
              <input type="checkbox"></input>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
