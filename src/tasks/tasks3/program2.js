//Remove the spaces found in a string

import React from 'react'

export default function Program2() {
    const str = "This is a string";
    const result = str.replace(/\s/g, "");
    
    return (
        <div>{result}</div>
    )
}
