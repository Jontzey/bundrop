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
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", border:"solid", justifyContent:"center"}} >
                        <div>
                        <h3>Number: {r.Number}</h3>
                            <h3>{r.Name}</h3>
                            <h3>Estimated Deliver time {r.DeliverTime}</h3>
                        </div>
                        <div style={{border:"solid"}} >
                               {
                            r.Order.map((b) => (
                                <div style={{display:"flex", gap:"12px", alignItems:"center", flexDirection:"row"}} >
                                    <h3 className='reciepStyle'>{b.name}</h3>
                                    <h3 className='reciepStyle' >{b.price}kr</h3>
                                </div>

                            ))
                        }
                        </div>
                     
                    </div>
                ))
            }
    </div> );
}

export default Receipt;