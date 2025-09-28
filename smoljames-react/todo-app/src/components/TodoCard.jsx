export function TodoCard(props) {

  const { todo, handleCompleteTodo, handleDeleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.complete} onClick={() => handleCompleteTodo(todo)}>
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todo)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
