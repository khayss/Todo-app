import { Todo } from "./Todo";
export interface TodoItemProps {
  todo: Todo;
  updateTodo?: (id: number, value: string) => void;
  handleDelete: () => void;
  handleEdit: () => void;
  divClickHandler: () => void;
  isChecked: boolean;
}
