import "./TodoInput.css";

function TodoInput() {
  return (
    <div>
      <form action="">
          <label htmlFor="todo">Enter a Todo</label>
          <input type="text" name="todo" />
        <input type="submit" value="add" />
      </form>
    </div>
  );
}

export default TodoInput;
