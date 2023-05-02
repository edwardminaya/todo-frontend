export function TodosNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreateTodo(params);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" type="text" placeholder="Task description"></input>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}
