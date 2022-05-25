import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };
  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="Task">Task:</label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button id="newButton">Add a todo!</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
