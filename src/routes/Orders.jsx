import React, { useEffect, useState } from 'react';
import Navbar from '../componentsUi/Navbar';



function Orders() {

    const [getCarItems, SetGetCartItems] = useState([]);

    useEffect(() => {
        let items = localStorage.getItem("CartItems");

        if(!items) {
            items = [];
        }
        else {
             let cartitems = JSON.parse(items);
             SetGetCartItems(cartitems);
             console.table(cartitems)
        }
    },[])
    return ( <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Navbar/>
        <div className='Order-container'>
            <div style={{display:"flex", justifyContent:"center"}}>
                 <h1 style={{color:"whitesmoke"}}>Your Order</h1>
            </div>
        
        <div style={{display:"flex", justifyContent:"center", gap:"20px", paddingBottom:"30px"}}>
            <div className='allOrders'>
                 {
                    
                getCarItems.map((Order) => (
                    <div className='Orders-container'>
                        <div>
                            <img style={{width:"60px", border:"white solid"}} src={Order.image} alt="" />
                            
                        </div>
                        <h1>{Order.name}</h1>
                            
                        <div className='Cancel-order'>
                           X
                        </div>
                    </div>
                ))
            }
            </div>
           
            <div className='Detail-container'>
                <h1>Details</h1>
                <h3>Price:</h3>
                <button style={{width:"100px",marginTop:"30px"}}>Pay</button>
            </div>
        </div>
        </div>
       
    </div> );
}

export default Orders;