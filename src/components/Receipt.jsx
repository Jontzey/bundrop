import React, { useEffect, useState } from 'react';
import Navbar from '../componentsUi/Navbar';




function Receipt() {

    const [reciept, setReciept] = useState([]);

    function test() {
        console.log(reciept);
    }

    useEffect(() => {
        fetch("http://localhost:9000/Receipt").then((res) => res.json()).then((data) => setReciept(data));

    },[])
    return ( <div>
            <Navbar/>
            <div className='recieptOnC' style={{display:"flex", alignItems:"center", justifyContent:"center"}}><h1>Reciept</h1></div>
            {
                reciept.slice().reverse().map((r) => (
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", border:"solid"}} >
                        <h2>Number: {r.Number}</h2>
                        {
                            r.order.map((b) => (
                                <div style={{display:"flex", gap:"10px", alignItems:"center"}} >
                                    <h3>{b.name}</h3>
                                    <h3>{b.price}kr</h3>
                                </div>
                            ))
                        }
                        <h3>Estimated Deliver time {r.DeliverTime}</h3>
                    </div>
                ))
            }
    </div> );
}

export default Receipt;