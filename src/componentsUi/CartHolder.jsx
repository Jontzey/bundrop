import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



function CartHolder(props) {

        let [NumberOfItems, SetItems] = useState("0");
    useEffect(() => {


         let cartItemsNumberDisplayer = localStorage.getItem("NumberOfCartItems")
         cartItemsNumberDisplayer = JSON.parse(cartItemsNumberDisplayer);
         SetItems(cartItemsNumberDisplayer);
      
    })
        
            
        
    return (  <div style={{display:"flex", backgroundColor:"#", justifyContent:"end", marginTop:"15px", position:"sticky", top:"100px", marginRight:"20px",}}>
        
         <div style={{marginTop:"10px"}}>
        <Link style={{color:"black"}} to={"/order"}> 
        <FontAwesomeIcon icon={faCartShopping} size="2xl" />
        </Link>
        </div>
        <div style={{marginLeft:"2px"}}>
            <h3>{NumberOfItems}</h3>
        </div>
        
       
    </div>);
}

export default CartHolder;