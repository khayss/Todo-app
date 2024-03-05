import { FormEvent, FunctionComponent, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../types/Todo";
import { EditTodoStyle } from "../utils/styles/EditTodoStyle";
interface InputProps {
  updateTodo: (updatedTodo: string) => void;
  handleDelete: () => void;
  todo: Todo;
  autoFocus: boolean;
}

const EditTodo: FunctionComponent<InputProps> = (props) => {
  const [updatedTodo, setUpdatedTodo] = useState(props.todo.value);
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.updateTodo(updatedTodo);
  };
  return (
    <div className="w-full">
      <form onSubmit={formSubmitHandler} {...EditTodoStyle.formContainer}>
        <div {...EditTodoStyle.inputContainer}>
          <input
            type="text"
            name="todo"
            value={updatedTodo}
            autoFocus={props.autoFocus}
            onChange={(e) => setUpdatedTodo(e.target.value)}
            {...EditTodoStyle.input}
          />
        </div>
        <div {...EditTodoStyle.btnContainer}>
          <button type="submit" {...EditTodoStyle.updateBtn}>
            <DoneIcon />
            <span>update</span>
          </button>
          <button
            {...EditTodoStyle.deleteBtn}
            onClick={() => props.handleDelete()}
          >
            <DeleteIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
