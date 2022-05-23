import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", function() {
  const div = document.createElement("div");
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("matches snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
