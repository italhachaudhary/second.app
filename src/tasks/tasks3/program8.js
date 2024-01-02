//Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8


import React,{useState} from 'react'

export default function Program8() {
        const [str1] = useState([-3, 8, 7, 6, 5, -4, 3, 2, 1]);
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
             <h1>{str1.join(",")}</h1>
        </div>
    )
}