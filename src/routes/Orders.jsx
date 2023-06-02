import React, { useEffect, useState } from 'react';
import Navbar from '../componentsUi/Navbar';
import { Link } from 'react-router-dom';



function Orders() {

    const [getCartItems, SetGetCartItems] = useState([]);
    const [SummaryPrice, SetSummaryPrice] = useState(0);
    const [isOrderEmpty, SetOrdersWindow] = useState(false)
   
    function DeleteOrder(name) {
        
        const deleteItem = name;
        const updatedStorage = getCartItems.filter((s) => s.name !== deleteItem);
        console.log(deleteItem)
        SetGetCartItems(updatedStorage);
        localStorage.setItem("CartItems", JSON.stringify(updatedStorage));
        // console.table(getCartItems);

    }

    useEffect(() => {
        let items = localStorage.getItem("CartItems");

        if(!items) {
            items = [];
            SetOrdersWindow(false);
        }
        else {
             let cartitems = JSON.parse(items);
             SetGetCartItems(cartitems);
             SetOrdersWindow(true);
               
            }

        let totalprice = localStorage.getItem("TotalPrice");
        let parsedTotalPrice = JSON.parse(totalprice);
            SetSummaryPrice(parsedTotalPrice.TotalP);
                
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
                    
                getCartItems.map((Order) => (
                    <div className='Orders-container'>
                        <div>
                            <img style={{width:"60px", border:"white solid"}} src={Order.image} alt="" />
                            
                        </div>
                        <h1>{Order.name}</h1>
                            
                        <div Name={Order.name} onClick={DeleteOrder} className='Cancel-order'>
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