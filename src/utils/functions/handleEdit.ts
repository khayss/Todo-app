import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";

export const handleEdit = (
  index: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>,
  setEditFocus: Dispatch<SetStateAction<boolean>>
) => {
  setEditFocus(true);
  setTodos((prev) =>
    prev.map((item) => {
      item.isEditing = false;
      return { ...item };
    })
  );
  setTodos((prev) => {
    prev[index].isEditing = true;
    return [...prev];
  });
};
