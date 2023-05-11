import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
export function ListsIndex(props) {
  return (
    <div className="list-index">
      {props.lists.map((list) => (
        <div key={list.id}>
          <Link to={`/todos?list_id=${list.id}`} className="list-item">
            {list.list_name}
          </Link>
        </div>
      ))}
    </div>
  );
}
