/* eslint-disable react/prop-types */
export function TodosNew(props) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const listId = urlSearchParams.get("list_id");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("list_id", listId);
    console.log("handleSubmit", params);
    props.onCreateTodo(params);
    event.target.reset();
  };
  return (
    <div className="create-task">
      <form onSubmit={handleSubmit}>
        <div className="task-name">
          <input
            className="form-control form-control-sm"
            name="title"
            type="text"
            placeholder="Task name"
            aria-label=".form-control-sm example"
          ></input>
        </div>
        <div className="task-description">
          <input
            className="form-control form-control-sm"
            name="details"
            type="text"
            placeholder="Description"
            aria-label=".form-control-sm example"
          ></input>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              Due Date <input name="due_date" type="date"></input>
            </div>
            <div className="col">
              <button type="submit">Create Task</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
