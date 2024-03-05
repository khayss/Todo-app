import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";

export const updateTodo = (
  index: number,
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  return (value: string) => {
    const items = [...todos];
    const item = {
      ...items[index],
      isEditing: items[index].isEditing ? false : true,
      value: value,
    };
    items.splice(index, 1, item);
    setTodos(items);
  };
};
