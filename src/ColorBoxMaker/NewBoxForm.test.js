import React from "react";
import ReactDOM from "react-dom";
import NewBoxForm from "./NewBoxForm";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", function() {
  const div = document.createElement("div");
  ReactDOM.render(<NewBoxForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("matches snapshot", function() {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
