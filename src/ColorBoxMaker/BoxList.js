import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const add = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };
  const remove = (id) => {
    console.log("hello");
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  const renderBoxes = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={add} />
      {renderBoxes}
    </div>
  );
}

export default BoxList;
