import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import { render, fireEvent } from "@testing-library/react";

function addTodo(todoList, task = "clean") {
  const todoInput = todoList.getByLabelText("Todo");
  fireEvent.change(todoInput, { target: { value: todo } });
  const button = todoList.getByText("Add a new todo!");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  const div = document.createElement("div");
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
it("can add a new todo", function() {
  const todoList = render(<TodoList />);

  //no todos
  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  addTodo(todoList);

  //expect to see a todo

  const removeButton = todoList.getByText("X");
  expect(removeButton).toBeInTheDocument();

  //expect form to be empty
  expect(todoList.getAllDisplayedValue("")).toHaveLength(1);
});

it("can remove a todo", function() {
  const todoList = render(<TodoList />);
  addtodo(todoList);
  const removeButton = todoList.getByText("X");

  //click remove button and todo should be gone
  fireEvent.click(button);
  expect(removeButton).not.toBeInTheDocument();
});
