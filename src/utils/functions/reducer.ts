import { Action } from "../../types/Action";
import { Todo } from "../../types/Todo";

export const reducer = (todo: Todo, action: Action): Todo => {
  switch (action.type) {
    case "VALUE":
      return { ...todo, value: action.payload };
    case "ID":
      return { ...todo, id: action.payload };
    case "EDIT":
      return { ...todo, isEditing: action.payload };
    case "RESET":
      return new Todo(0, "", false, false);
    default:
      return todo;
  }
};
