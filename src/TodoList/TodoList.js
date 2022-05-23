import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const add = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const renderTodos = todos.map((todo) => (
    <Todo key={todo.id} id={todo.id} task={todo.task} handleRemove={remove} />
  ));

  return (
    <div>
      <NewTodoForm createTodo={add} />
      {renderTodos}
    </div>
  );
}

export default TodoList;
