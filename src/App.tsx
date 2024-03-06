import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import {
  FunctionComponent,
  useReducer,
  useState,
  useEffect,
  ChangeEvent,
} from "react";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types/Todo";
import { reducer } from "./utils/functions/reducer";
import { todoChangeHandler } from "./utils/functions/todoOnChangeHandler";
import { TodoState } from "./types/TodoState";
import EditTodo from "./components/EditTodo";
import { addTodo } from "./utils/functions/addTodo";
import { updateTodo } from "./utils/functions/updateTodo";
import { handleDelete } from "./utils/functions/handleDelete";
import { handleEdit } from "./utils/functions/handleEdit";
import { AppStyle } from "./utils/styles/AppStyle";
import Footer from "./components/Footer";
import { divClickHandler } from "./utils/functions/divClickHandler";

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>(
    Array.isArray(JSON.parse(localStorage.getItem("todos")!))
      ? (JSON.parse(localStorage.getItem("todos")!) as Todo[])
      : []
  );
  const [editFocus, setEditFocus] = useState(false);
  const [todo, dispatch] = useReducer(reducer, new Todo(0, "", false, false));

  useEffect(() => {
    const length = todos.length;
    dispatch({
      type: TodoState.ID,
      payload: length < 1 ? 0 : todos[length - 1].id + 1,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoInputProps = {
    autoFocus: !editFocus,
    addTodo: () => addTodo(todo, setTodos, dispatch),
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      todoChangeHandler(e, dispatch),
    todo,
  };

  const todoItems = todos.map((item, index) => {
    // if (item instanceof Todo) {
    console.log(item instanceof Todo);
    return item.isEditing ? (
      <EditTodo
        autoFocus={editFocus}
        key={index}
        todo={item}
        updateTodo={updateTodo(index, todos, setTodos)}
        handleDelete={() => handleDelete(item.id, setTodos)}
      />
    ) : (
      <TodoItem
        handleDelete={() => handleDelete(item.id, setTodos)}
        handleEdit={() => handleEdit(index, setTodos, setEditFocus)}
        todo={item}
        key={"todo" + index.toString()}
        divClickHandler={() => divClickHandler(index, setTodos)}
        isChecked={item.isChecked}
      />
    );
    // }
  });

  return (
    <>
      <Header />
      <div {...AppStyle.mainTodoDiv}>
        <div {...AppStyle.minTodoDiv}>
          <TodoInput {...todoInputProps} />
          <div {...AppStyle.todoItemsDiv}>{todoItems}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
