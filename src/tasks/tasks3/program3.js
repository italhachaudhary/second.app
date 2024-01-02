//Return a Boolean if a number is divisible by 10

import React from "react";

export default function Program3() {
  let num = 105;
  return <div>
    {
    num % 10 == 0 ? <h1>true</h1> : <h1>false</h1>
    }
    </div>;
}
