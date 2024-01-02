//Write a function that reverses a list without using buit-in reverse function
import React, {useState} from 'react'

export default function Task1() {
    const [data, setData] = useState('12345');
    const [result, setresult] = useState([]);
    const change = () => {
      let arr2 = [];
      for (let i = data.length - 1; i >= 0; i--) {
        arr2.push(data[i]);
      }
      setresult(arr2);
    }

    return (
      <div>
        <h1>{data}</h1>
        <button type='submit' onClick={change}>Reverse</button>
        <h1>{result}</h1>
      </div>
    )
}
