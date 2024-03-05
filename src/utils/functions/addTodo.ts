import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";
import { Action } from "../../types/Action";
import { TodoState } from "../../types/TodoState";
export const addTodo = (
  todo: Todo,
  setTodos: Dispatch<SetStateAction<Todo[]>>,
  dispatch: Dispatch<Action>
) => {
  if (todo.value !== "") {
    setTodos((prev: Todo[]) => [...prev, todo]);
    dispatch({ type: TodoState.RESET });
  }
};
