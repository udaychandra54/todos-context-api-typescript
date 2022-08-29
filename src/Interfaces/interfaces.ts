export type Todo = {
  id: number;
  email: string;
  username: string;
};

export interface TodoState {
  addTodo: () => {};
  removeTodo: () => {};
  todos: Todo[];
}
