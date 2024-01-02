//Write a JavaScript program to remove duplicate items from an array (ignore case
//sensitivity).

import React from "react";

export default function Program12() {
  const arr = ["a", "b", "b", "b", "b", "d", "A", "B", "C", "C", "a", "a"];
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) === -1) {
      arr2.push(arr[i]);
    }
  }
  return (
    <div>
      <h3>Origional Array: {arr}</h3>
      <h3>Duplicate Removed Array: {arr2}</h3>

    </div>
  );
}
