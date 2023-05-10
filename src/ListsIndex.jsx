import { useState } from "react";
import { ListsNew } from "./ListsNew";
import axios from "axios";
/* eslint-disable react/prop-types */

export function ListsIndex(props) {
  const [lists, setLists] = useState([]);

  // Creating a new List
  const handleCreateList = (params) => {
    console.log("handleCreateList", params);
    axios.post("http://localhost:3000/lists.json", params).then((response) => {
      setLists([...lists, response.data]);
    });
  };

  return (
    <div>
      <h3>My Lists</h3>
      <ListsNew onCreateList={handleCreateList} />
      {props.lists.map((list) => (
        <div key={list.id}>
          <a href="#">
            <h4>{list.list_name}</h4>
          </a>
        </div>
      ))}
    </div>
  );
}
