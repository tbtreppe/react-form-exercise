import React from "react";

function Todo({ task = "first task!", id = "1", remove }) {
  const handleDelete = () => remove(id);

  return (
    <div>
      <ul>
        <li>task: {task}</li>
      </ul>

      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default Todo;
