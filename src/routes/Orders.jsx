import React, { useEffect, useState } from 'react';
import Navbar from '../componentsUi/Navbar';
import { Link } from 'react-router-dom';


function Orders() {

    const [getCartItems, SetGetCartItems] = useState([]);
    const [SummaryPrice, SetSummaryPrice] = useState(0);
    const [isOrderEmpty, SetOrdersWindow] = useState(false)
   
    function DeleteOrder(props) {
        
        const deleteItem = props.target;
        const item = deleteItem.getAttribute("id");
        console.log(props.target.parentElement)
        console.log(item)
        const updatedStorage = getCartItems.filter((s) => s.id !== parseInt(item));
        SetGetCartItems(updatedStorage);
        localStorage.setItem("CartItems", JSON.stringify(updatedStorage));
        console.log(getCartItems);

        
        let total = updatedStorage.reduce((accumulator, item) => accumulator + item.price, 0);

        let TotalPrice = localStorage.getItem("TotalPrice");
        if(!TotalPrice){  
            TotalPrice = {TotalP:0};
        }
        else {
            TotalPrice = JSON.parse(TotalPrice)
        }
        TotalPrice.TotalP = total;
        localStorage.setItem("TotalPrice", JSON.stringify(TotalPrice));
        SetSummaryPrice(total);
       

        let number = updatedStorage.length;
        
        let cartItemsNumberDisplayer = localStorage.getItem("NumberOfCartItems")
        if(!cartItemsNumberDisplayer){  
            cartItemsNumberDisplayer = {Items: 0};
        }
        else {
            cartItemsNumberDisplayer = JSON.parse(cartItemsNumberDisplayer)
        }
        cartItemsNumberDisplayer = number;
        localStorage.setItem("NumberOfCartItems", JSON.stringify(cartItemsNumberDisplayer));
        if(number === 0){
            if(isOrderEmpty ===  true){

                SetOrdersWindow(false)
            }
        }
        else{

        }

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
            console.log(isOrderEmpty);
                
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
                            
                        <div id={Order.id} name={Order.name} onClick={DeleteOrder} className='Cancel-order'>
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