import React, { useContext } from "react";
import { TodoContext } from "../store/store";

type Props = {};

const Todos = (props: Props) => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="container">
      <h2>Todos</h2>
      <ul>
        {todos &&
          todos.map((todo) => {
            return (
              <li key={todo.id} style={{ listStyleType: "none" }}>
                {todo.email} - {todo.username}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Todos;
