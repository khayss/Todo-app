import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";

export const handleDelete = (
  id: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  setTodos((prev) =>
    prev.map((item) => {
      item.isEditing = false;
      return { ...item };
    })
  );
  setTodos((prev) => prev.filter((item) => item.id !== id));
};
