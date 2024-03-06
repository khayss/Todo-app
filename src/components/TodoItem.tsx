import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FunctionComponent } from "react";
import { TodoItemProps } from "../types/TodoItemProps";
import { TodoItemStyle } from "../utils/styles/TodoItemStyle";

const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
  return (
    <div
      {...(props.isChecked
        ? TodoItemStyle.mainTodoItemsContainerChecked
        : TodoItemStyle.mainTodoItemsContainer)}
    >
      <div {...TodoItemStyle.todoContainer} onClick={props.divClickHandler}>
        <p
          id={"todo-item-" + props.todo.id.toString()}
          {...(props.isChecked
            ? TodoItemStyle.todoTextChecked
            : TodoItemStyle.todoText)}
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
