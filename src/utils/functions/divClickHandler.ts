import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";

export const divClickHandler = (
  index: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  setTodos((prev) => {
    const item = prev[index];
    const items = [...prev];
    items.splice(index, 1, {
      ...item,
      isChecked: item.isChecked ? false : true,
    });
    return items;
  });
};
