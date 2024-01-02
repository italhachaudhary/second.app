//Write a function that tests whether a string is a palindrome

import React from 'react';

export default function Task2() {
    let str1 = "civic";
    let str2 = "";

    for (let i = str1.length-1; i >=0; i--) {
        str2+=str1[i];
    }

  return (
    <div>
        <h1>{str1}</h1>
        {
            str1==str2 ? <h1>is Palindrome</h1>:<h1>is not Palindrome</h1>
        }
    </div>
  )
}
