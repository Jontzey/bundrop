import React, { useEffect, useState } from 'react';
import Navbar from '../componentsUi/Navbar';
import { Link } from 'react-router-dom';



function Orders() {

    const [getCarItems, SetGetCartItems] = useState([]);
    const [SummaryPrice, SetSummaryPrice] = useState();
    const [isOrderEmpty, SetOrdersWindow] = useState(false)
   

    useEffect(() => {
        let items = localStorage.getItem("CartItems");

        if(!items) {
            items = [];
            SetOrdersWindow(false);
        }
        else {
             let cartitems = JSON.parse(items);
             SetGetCartItems(cartitems);
             console.table(cartitems)
            }
            let sum = getCarItems.filter((item) => item.hasOwnProperty("price")).
            map((item) => item.price).reduce((SummaryPrice, price) => SummaryPrice + price, 0);
            SetSummaryPrice(sum);
            SetOrdersWindow(true);
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
            {
                !isOrderEmpty ? 
                (
                    <div>
                        <h1 style={{color:"whitesmoke"}}>No orders has been added</h1>
                    </div>
                ):
                (
                    <div className='Detail-container'>
                        <h1>Details</h1>
                        <h3>Price:{SummaryPrice}</h3>
                        
                        <Link to={"/Payment"}><button style={{width:"100px",marginTop:"30px"}}>Pay</button></Link>
                    </div>
                )
            }
           
        </div>
        </div>
       
    </div> );
}

export default Orders;