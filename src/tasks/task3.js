//Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3].

import React,{useState} from 'react'

export default function Task3() {
        const [str1] = useState(['a','b','c']);
        const [str2] = useState([1,2,3]);


        str2.forEach(item => {
            str1.push(item);
        }); 
        console.log(str1); 



    return (
        <div>
             <h1>{str1}</h1>
        </div>
    )
}
