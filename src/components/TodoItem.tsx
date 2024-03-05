import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FunctionComponent } from "react";
import { TodoItemProps } from "../types/TodoItemProps";
import { TodoItemStyle } from "../utils/styles/TodoItemStyle";

const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
  const divClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const div = e.target as HTMLDivElement;
    div.classList.toggle("opacity-50");
    (div.childNodes[0] as HTMLParagraphElement).classList.toggle(
      "line-through"
    );
  };
  return (
    <div {...TodoItemStyle.mainTodoItemsContainer}>
      <div {...TodoItemStyle.todoContainer} onClick={divClickHandler}>
        <p
          id={"todo-item-" + props.todo.id.toString()}
          {...TodoItemStyle.todoText}
        >
          {props.todo.value}
        </p>
      </div>

      <div {...TodoItemStyle.btnContainer}>
        <button {...TodoItemStyle.editBtn} onClick={() => props.handleEdit()}>
          <EditIcon />
          <span>Edit</span>
        </button>
        <button
          {...TodoItemStyle.deleteBtn}
          onClick={() => props.handleDelete()}
        >
          <DeleteIcon />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
