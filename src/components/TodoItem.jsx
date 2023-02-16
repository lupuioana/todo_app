function TodoItem({ name, completed, onCompleteTodo, index }) {
  return (
    <>
      <div>
        <h4>
          {name} - {completed.toString()}
        </h4>
        <button>Delete!</button>
        <button
          onClick={() => {
            onCompleteTodo(index);
          }}
        >
          Complete
        </button>
      </div>
    </>
  );
}

export default TodoItem;
