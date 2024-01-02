//Sort array of 3 numbers. [ 7, 2, 5 ]

import React,{useState} from 'react'

export default function Program5() {
        const [str1] = useState([7,5,2]);
        const [str2] = useState([]);

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