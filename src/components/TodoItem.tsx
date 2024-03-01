import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Todo } from "../types/Todo";
import "./TodoItem.css";

function TodoItem(props: {
  todo: Todo;
  updateTodo: (id: number, value: string) => void;
  handleDelete: (id: number) => void;
}) {
  const [readOnly, setReadOnly] = useState(true);
  const [editText, setEditText] = useState("Edit");
  const handleEdit = (id: number) => {
    if (editText === "Edit") {
      document.getElementById("todo-item-" + id.toString())!.focus();
      setEditText("Save");
      setReadOnly(false);
    } else if (editText === "Save") {
      setReadOnly(true);
      setEditText("Edit");
      props.updateTodo(id, "todo");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className="todo-item-container">
      <input
        type="text"
        value={props.todo.value}
        readOnly={readOnly}
        onChange={handleChange}
        id={"todo-item-" + props.todo.id.toString()}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            handleEdit(props.todo.id);
          }
        }}
      />
      <div>
        <button className="btn-edit" onClick={() => handleEdit(props.todo.id)}>{editText}</button>
        <button className="btn-delete" onClick={() => props.handleDelete(props.todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
