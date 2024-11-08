import { useState } from "react";

const useToDoList = () => {
  const [todos, setTodos] = useState(() => {
    const intialList = localStorage.getItem("savedTodos");
    return intialList ? JSON.parse(intialList) : [];
  });

  const updateTodos = (updatedTodo) => {
    localStorage.setItem("savedTodos", JSON.stringify(updatedTodo));
    setTodos(updatedTodo);
  };

  const addTodo = (val) => {
    const newTodo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      text: val,
      completed: false,
    };
    updateTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    updateTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  return { todos, addTodo, removeTodo, toggleTodo };
};

export default useToDoList;
