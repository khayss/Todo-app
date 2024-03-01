import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Todo } from "../types/Todo";

function TodoItem(props: {
  todo: Todo;
  updateTodo: (id: number, value: string) => void;
}) {
  const [readOnly, setReadOnly] = useState(true);
  const [todo, setTodo] = useState(props.todo.value);
  const [editText, setEditText] = useState("Edit");
  const handleEdit = (id: number) => {
    if (editText === "Edit") {
      document.getElementById("todo-item-" + id.toString())!.focus();
      setEditText("Save");
      setReadOnly(false);
    } else if (editText === "Save") {
      setReadOnly(true);
      setEditText("Edit");
      props.updateTodo(id, todo);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };
  return (
    <div className="todo-item-container">
      <input
        type="text"
        value={todo}
        readOnly={readOnly}
        onChange={handleChange}
        id={"todo-item-" + props.todo.id.toString()}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            handleEdit(props.todo.id);
          }
        }}
      />
      <button
        onClick={() => {
          handleEdit(props.todo.id);
        }}
      >
        {editText}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
