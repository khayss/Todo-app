import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";

export const updateTodo = (
  index: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  return (value: string) => {
    setTodos((prev) => {
      prev[index].isEditing = false;
      prev[index].value = value;
      return [...prev];
    });
  };
};
