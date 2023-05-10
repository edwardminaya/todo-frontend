import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export function ListsIndex(props) {
  return (
    <div>
      {props.lists.map((list) => (
        <div key={list.id}>
          <Link to={`/todos?list_id=${list.id}`}>{list.list_name}</Link>
        </div>
      ))}
    </div>
  );
}
