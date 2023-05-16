import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 id="signuptext">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input name="name" type="text" className="form-control" id="formGroupExampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input name="email" type="email" className="form-control" id="formGroupExampleInput2" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput3" className="form-label">
            Pasword
          </label>
          <input name="password" type="password" className="form-control" id="formGroupExampleInput3" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput4" className="form-label">
            Password Confirmation
          </label>
          <input name="password_confirmation" type="password" className="form-control" id="formGroupExampleInput4" />
        </div>
        <button className="list-item" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
