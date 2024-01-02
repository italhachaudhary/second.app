//Write a function that reverses a list of boxes.

import React, { useState } from "react";

export default function Task5() {
  const [boxes, setBoxes] = useState([
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
  ]);

  const reverse = () => {
    let output = [];
    for (let i = boxes.length - 1; i >= 0; i--) {
      output.push(boxes[i]);
    }
    setBoxes(output);
  };

  return (
    <div>
      <h1>Task 2</h1>
      <div className="row">
        {boxes.map((data) => (
          <div
            style={{
              textAlign: "center",
              width: "200px",
              height: "200px",
              padding: 55,
              border: "2px solid black",
              margin: 10,
            }}
          >
            <h1>{data.name}</h1>
          </div>
        ))}
      </div>
      <button onClick={reverse}>Reverse</button>
    </div>
  );
}
