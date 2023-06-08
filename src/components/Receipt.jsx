import React, { useEffect, useState } from 'react';
import Navbar from '../componentsUi/Navbar';
import Footer from '../componentsUi/Footer';




function Receipt() {

    const [reciept, setReciept] = useState([]);

    function test() {
        console.log(reciept);
    }

    useEffect(() => {
        fetch("http://localhost:9000/Receipt").then((res) => res.json()).then((data) => setReciept(data));

    },[])
    
    // HERE we can throw in a if to see if list then make a interface change to let user if there is any reciep to see! 

    return ( <div>
            <Navbar/>
            <div className='recieptOnC' style={{display:"flex", alignItems:"center", justifyContent:"center"}}><h1>Reciept</h1></div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"15px"}}>
            {
                reciept.slice().reverse().map((r) => (
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", border:"solid", justifyContent:"center", width:"800px", borderRadius:"10px", backgroundColor:"whitesmoke"}} >
                        <div style={{marginRight:"60px"}}>
                        <h3>Number: {r.Number}</h3>
                            <h3>Name: {r.Name}</h3>
                            <h3>City: {r.City}</h3>
                            <h3>Adress: {r.Adress} / HouseNumber:{r.HouseNumber}</h3>
                            <h3>{r.Name}</h3>
                            <h3>Estimated Deliver time {r.DeliverTime}</h3>
                        </div>
                        <div style={{border:"solid", display:"flex", flexDirection:"column", alignItems:"center", borderRadius:"10px", height:"250px", backgroundColor:""}} >
                            <h1>Orders</h1>
                               {
                            r.Order.map((b) => (
                                <div style={{display:"flex", gap:"5px", alignItems:"center", flexDirection:"row"}} >
                                    <h3 className='reciepStyle'>{b.name}</h3>
                                    <h3 className='reciepStyle' >{b.price}kr</h3>
                                </div>

                            ))
                        }
                        </div>
                     
                    </div>
                ))
            }
            </div>
          
            <Footer/>
    </div> );
}

export default Receipt;