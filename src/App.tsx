import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import "./components/Header.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const todosArray: string[] = [];
  const [todos, setTodos] = useState(todosArray);
  const addTodo = (todo: string) => {
    setTodos((prev: string[]) => [...prev, todo]);
    console.log(todos);
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
              todo={item}
              id={index.toString()}
              key={"todo" + index.toString()}
            />
          ))}
        </div>
      </>
    </>
  );
}

export default App;
