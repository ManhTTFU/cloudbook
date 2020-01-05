import React, { useState } from "react";

const CreateUser = () => {
  const initialState = {
    email: "",
    name: "",
    password: "",
    role: "admin"
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = event => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <form className="container mt-5" onSubmit={handleLogin}>
      <div className="form-group row">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Role</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="inputRole1"
                value="admin"
                checked={data.role === "admin"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="inputRole1">
                Admin
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="inputRole2"
                value="author"
                checked={data.role === "author"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="inputRole2">
                Author
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
        <div className="col-sm-10">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Create account
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateUser;
