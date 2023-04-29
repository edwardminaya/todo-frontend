export function TodosIndex(props) {
  return (
    <div>
      <h1>Todos Index</h1>
      {props.todos.map((todo) => (
        <div>
          <p>{todo.title}</p>
          <input type="checkbox"></input>
        </div>
      ))}
    </div>
  );
}
