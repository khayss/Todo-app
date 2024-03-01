import { ChangeEvent, FormEvent, useState } from "react";
import "./TodoInput.css";

function TodoInput(props: { addTodo: (params: string) => void }) {
  const [todo, setTodo] = useState("");
  const todoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length !== 0) props.addTodo(todo);
    setTodo("");
  };
  return (
    <div className="form-container">
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="todo">
            <h4>Enter a Todo</h4>
          </label>
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={todoChangeHandler}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default TodoInput;
