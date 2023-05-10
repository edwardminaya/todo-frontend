/* eslint-disable react/prop-types */
export function TodosNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreateTodo(params);
    event.target.reset();
  };
  return (
    <div className="create-task">
      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" type="text" placeholder="Task name"></input>
        </div>
        <div>
          <input name="details" type="text" placeholder="Description"></input>
        </div>
        {/* LIST ID REQUIRED TO CREATE */}
        <div>
          <input name="list_id" type="number" placeholder="Select A Task List"></input>
          Required
        </div>
        <div>
          Due Date: <input name="due_date" type="date" placeholder="Select Due Date"></input>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}
