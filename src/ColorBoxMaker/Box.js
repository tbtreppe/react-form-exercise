import React from "react";

function Box({
  id,
  height = 5,
  width = 5,
  backgroundColor = "pink",
  handleRemove,
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;
