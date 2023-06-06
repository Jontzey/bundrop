import React, { useEffect, useState } from 'react';
import Navbar from '../componentsUi/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Footer from '../componentsUi/Footer';

function Orders() {

    const [getCartItems, SetGetCartItems] = useState([]);
    const [SummaryPrice, SetSummaryPrice] = useState(0);
    const [isOrderEmpty, SetOrdersWindow] = useState(false)
   
    function DeleteOrder(props) {
        
        console.log(props);
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
        if(!totalprice){
            totalprice = {TotalP:0};
        }
        else{

            totalprice = JSON.parse(totalprice);
        }
            SetSummaryPrice(totalprice.TotalP);
            
                
    },[])
    return ( <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginBottom:"120px"}}>
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
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h1 style={{color:"whitesmoke"}}>No orders has been added</h1>
                        <Link to={"/home"}><FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "white"}} /></Link>
                    </div>
                ):
                (
                    <div className='Detail-container'>
                        <h1>Details</h1>
                        <h3>Price: { SummaryPrice}kr</h3>

                            {/* this is a precaution if user enter order route before adding anything to it */}
                        {
                            SummaryPrice === 0 ? 
                            (
                                <h3>No items found</h3>
                            ):
                            (
                                
                                <Link to={"/Payment"}><button style={{width:"100px",marginTop:"30px"}}>Pay</button></Link>
                            )
                        }
                        
                    </div>
                        
                )
            }
           
        </div>
        </div>
       <Footer/>
    </div> );
}

export default Orders;