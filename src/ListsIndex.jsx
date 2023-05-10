/* eslint-disable react/prop-types */
export function ListsIndex(props) {
  return (
    <div>
      <h3>My Lists</h3>
      {props.lists.map((list) => (
        <div key={list.id}>
          <a href="3">
            <h4>{list.list_name}</h4>
          </a>
        </div>
      ))}
    </div>
  );
}
