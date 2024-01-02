import React, { useState } from 'react'

const State = () =>{
    const [Data, setData] = useState(0);
    const Change1 = ()=>
    {
        setData(Data+1); 
    }
    const Change2 = ()=>
    {
        setData(Data-1); 
    }


    return(
        <div>
            <button onClick={Change2}>-</button>
            <input type="number" onChange={(d) => {setData(parseFloat(d.target.value))}} value={Data}/> 
            <button onClick={Change1}>+</button>
        </div>
    )
}

export default State;



