//Create a function that filters out negative numbers

import React, { useState } from 'react'

export default function Program1() {

  const [data] = useState([1,-1,-3,-2,3,4]);
  const [result] = useState([]);

  data.map((e)=>{
    if(e>0){
      result.push(e);
    }
  })
  

  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}

