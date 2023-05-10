/* eslint-disable react/prop-types */
export function ListsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreateList(params);
    event.target.reset();
    window.location.href = "/";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="list_name" type="text" placeholder="List Name"></input>
        </div>
        <button type="submit">Create List</button>
      </form>
    </div>
  );
}
