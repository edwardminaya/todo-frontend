/* eslint-disable react/prop-types */
export function TodosShow(props) {
  return (
    <div>
      <h5>{props.todo.title}</h5>
      <p>{props.todo.details}</p>
      <p>{props.todo.due_date}</p>
    </div>
  );
}
