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
      return { ...item, isEditing: false };
    })
  );
  setTodos((prev) => {
    const item = prev[index];
    const items = [...prev];
    items.splice(index, 1, {
      ...item,
      isEditing: item.isEditing ? false : true,
    });
    return items;
  });
};
