import { ChangeEvent, FormEvent, FunctionComponent } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Todo } from "../types/Todo";
import { TodoInputStyle } from "../utils/styles/TodoInputStyle";
interface InputProps {
  addTodo: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  todo: Todo;
  autoFocus: boolean;
}

const TodoInput: FunctionComponent<InputProps> = (props) => {
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addTodo();
  };
  return (
    <div className="w-2/3">
      <form onSubmit={formSubmitHandler} {...TodoInputStyle.formContainer}>
        <div {...TodoInputStyle.inputContainer}>
          <label htmlFor="todo" {...TodoInputStyle.label}>
            Enter a Todo
          </label>
          <input
            autoFocus={props.autoFocus}
            type="text"
            name="todo"
            value={props.todo.value}
            onChange={props.onChange}
            {...TodoInputStyle.input}
          />
        </div>
        <button type="submit" {...TodoInputStyle.submitBtn}>
          <AddCircleOutlineIcon />
          <span>add</span>
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
