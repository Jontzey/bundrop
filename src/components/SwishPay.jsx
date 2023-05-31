import React from 'react';

import { useState } from 'react';


function SwishPay() {

    const [SwishNumber, SetNumber] = useState("");

    function SetCondition(e){
        
        SetNumber(e);
        console.log(SwishNumber)
    }
    function submitSwish() {

    }
    return ( <div>
        <h1 style={{color:"whitesmoke"}}>Swish Payment</h1>
        <h2 style={{color:"black"}}>Enter phone number</h2>
            <input onChange={(e) => {
                SetCondition(e.target.value)
            }} type='tel' placeholder='070-2344832' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            <button onClick={submitSwish}>Submit</button>
    </div>);
}

export default SwishPay;