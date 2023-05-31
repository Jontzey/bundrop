import React from 'react';




function VisaPay() {
    return ( <div>
        <form style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px", gap:"20px"}}>
            <h1 style={{color:"whitesmoke"}}> Visa Payment</h1>
            <label>Firstname:</label>
            <input type="text" />
            <label>Lastname:</label>
            <input type="text" />
            <label>Address:</label>
            <input type="text" />
            <label>Phone number:</label>
            <input type="tel" />
            <button type='submit'>Submit</button>
        </form>
    </div> );
}

export default VisaPay;