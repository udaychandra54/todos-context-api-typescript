import React, { useState, useContext } from "react";
import { TodoContext } from "../store/store";
import { useNavigate } from "react-router-dom";

type Props = {};

const AddTodo = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const data = useContext(TodoContext);
  let navigate = useNavigate();

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 9999),
      email,
      username,
    };
    data.addTodo(newTodo);
    navigate("/todos");
  };
  return (
    <div className="container w-50">
      <div className="card border-0 mt-3 shadow p-4">
        <form action="" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
