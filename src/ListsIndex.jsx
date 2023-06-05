/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react"; // import useState hook
import axios from "axios";

export function ListsIndex(props) {
  const [editListId, setEditListId] = useState(null); // initialize state for edit mode
  const [newName, setNewName] = useState(""); // initialize state for new name

  // function to handle form submit
  const handleUpdateList = (event, list) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3000/lists/${list.id}.json`, { list_name: newName })
      .then(() => {
        setEditListId(null); // exit edit mode
        setNewName(""); // reset new name input field
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="list-index">
      {Array.isArray(props.lists) &&
        props.lists.map((list) => (
          <div key={list.id}>
            {editListId === list.id ? (
              <form onSubmit={(event) => handleUpdateList(event, list)}>
                <input defaultValue={list.list_name} type="text" onChange={(event) => setNewName(event.target.value)} />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditListId(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              // if list is not in edit mode
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <Link to={`/todos?list_id=${list.id}`} className="list-item">
                        {list.list_name}
                      </Link>
                    </div>
                    <div className="col">
                      <button id="update-button-list" type="button" onClick={() => setEditListId(list.id)}>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
