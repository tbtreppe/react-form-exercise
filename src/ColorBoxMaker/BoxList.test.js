import React from "react";
import ReactDOM from "react-dom";
import BoxList from "./BoxList";
import { render, fireEvent } from "@testing-library/react";

function addBox(boxList, height = "5", width = "5", color = "purple") {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const backgroundInput = boxList.getByLabelText("Background Color");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add a new box!");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  const div = document.createElement("div");
  ReactDOM.render(<BoxList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
it("can add a new box", function() {
  const boxList = render(<BoxList />);

  //no boxes
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);

  //expect to see a box

  const removeButton = boxList.getByText("X");
  expect(removeButton).toBeInTheDocument();

  //expect form to be empty
  expect(boxList.getAllDisplayedValue("")).toHaveLength(3);
});

it("can remove a box", function() {
  const boxList = render(<BoxList />);
  addBox(boxList);
  const removeButton = boxList.getByText("X");

  //click remove button and box should be gone
  fireEvent.click(button);
  expect(removeButton).not.toBeInTheDocument();
});
