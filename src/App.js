import React from "react";
import BoxList from "./ColorBoxMaker/BoxList";
import TodoList from "./TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BoxList />
      <TodoList />
    </div>
  );
}

export default App;
