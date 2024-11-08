/*
You need to create a custom hook called useTodoList that can be used to manage a todo list stored in local storage.

The hook should return an object with the following properties:

todos: an array of todo items, each of which should have the properties id, text, and completed.
addTodo: a function that can be used to add a new todo item to the list.
removeTodo: a function that can be used to remove a todo item from the list by its id.
toggleTodo: a function that can be used to toggle the completion status of a todo item by its id.
Every time the todo list is updated (e.g., a todo item is added, removed, or completed), 
the hook should update the corresponding value in local storage.
*/
import useToDoList from "../../hooks/useTodoList";

const ToDoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useToDoList();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.elements.todoText.value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Incomplete" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
