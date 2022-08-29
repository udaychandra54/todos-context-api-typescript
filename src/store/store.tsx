import React, { createContext, ReactNode, useState } from "react";
import { Todo, TodoState } from "../Interfaces/interfaces";

type ContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => {};
};
export const TodoContext = createContext<ContextType>({} as ContextType);
type Props = {
  children?: ReactNode;
};

const TodoProvider = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    return newTodos;
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
