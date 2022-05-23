import React from "react";
import ReactDOM from "react-dom";
import NewTodoForm from "./NewTodoForm";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", function() {
  const div = document.createElement("div");
  ReactDOM.render(<NewTodoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
