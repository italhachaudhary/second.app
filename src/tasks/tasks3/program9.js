//Write a JavaScript program to find the most frequent item in an array. Sample
//array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )

import React from 'react'

export default function Program9() {
    var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var count = 0;
    var mostFrequentItem=null;
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i+1; j < arr1.length; j++) {
            if (arr1[i]==arr1[j]) {
                mostFrequentItem
            }
        }
        
    }
    

    
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}
