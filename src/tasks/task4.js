//Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] →
//[1,2,3,4,5,6]

import React,{useState} from 'react'

export default function Task4() {
        const [str1] = useState([1,4,6]);
        const [str2] = useState([2,3,5]);

        str2.forEach(item => {
            str1.push(item);
        }
        );

        for(let i=0;i<str1.length;i++){
                for(let j=i+1;j<str1.length;j++){
                        if(str1[i]>str1[j]){
                                let str3=str1[i];
                                str1[i]=str1[j];
                                str1[j]=str3;
                        }
                }
        }

    return (
        <div>
             <h1>{str1}</h1>
        </div>
    )
}