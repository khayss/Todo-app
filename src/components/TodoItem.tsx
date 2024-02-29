function TodoItem(props: { todo: string; id: string }) {
  return (
    <div>
      <p data-todoid={props.id}>{props.todo}</p>
    </div>
  );
}

export default TodoItem;
