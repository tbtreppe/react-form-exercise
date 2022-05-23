import React from "react";

function Todo({ task = "first task!", id = "1", handleRemove }) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <ul>
        <li>task: {task}</li>
      </ul>

      <button onclick={remove}>X</button>
    </div>
  );
}

export default Todo;
