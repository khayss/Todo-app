import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";

export const divClickHandler = (
  itemIndex: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  setTodos((prev) => {
    return prev.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, isChecked: !item.isChecked };
      }
      return { ...item };
    });
  });
};
