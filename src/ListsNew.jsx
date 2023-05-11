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
    <div className="list-create">
      <h4>My Lists</h4>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <input
                className="form-control form-control-sm"
                name="list_name"
                type="text"
                placeholder="Create List"
                aria-label=".form-control-sm example"
              ></input>
            </div>
            <div className="col-1">
              <button type="submit">+</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
