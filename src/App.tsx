import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import "./components/Header.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: string) => {
    setTodos((prev: Todo[]) => [
      ...prev,
      { id: prev.length < 1 ? 0 : prev[prev.length - 1].id + 1, value: todo },
    ]);
  };
  const updateTodo = (id: number, value: string) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index >= 0) {
      const todo: Todo = { id, value };
      setTodos((prev) => {
        prev.splice(index, 1, todo);
        return prev;
      });
    }
  };
  const handleDelete = (id: number) => {
    console.log(id)
    setTodos((prev) => prev.filter((item) => item.id !== id));
    console.log(todos)
  };
  return (
    <>
      <>
        <Header />
      </>
      <>
        <TodoInput addTodo={addTodo} />
      </>
      <>
        <div className="todo-container">
          {todos.map((item, index) => (
            <TodoItem
              handleDelete={handleDelete}
              todo={item}
              key={"todo" + index.toString()}
              updateTodo={updateTodo}
            />
          ))}
        </div>
      </>
    </>
  );
}

export default App;
