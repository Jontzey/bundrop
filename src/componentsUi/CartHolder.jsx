import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCartShopping } from "@fortawesome/free-solid-svg-icons";



function CartHolder(props) {

        let [NumberOfItems, SetItems] = useState("0");
    useEffect(() => {


         let cartItemsNumberDisplayer = localStorage.getItem("NumberOfCartItems")
         cartItemsNumberDisplayer = JSON.parse(cartItemsNumberDisplayer);
         SetItems(cartItemsNumberDisplayer);
      
    })
        
            
        
    return (  <div style={{display:"flex", backgroundColor:"#", justifyContent:"center", marginTop:"15px"}}>
        <div style={{marginTop:"10px"}}>
        <FontAwesomeIcon icon={faCartShopping} size="2xl" />
        </div>
        <div style={{marginLeft:"2px"}}>
            <h3>{NumberOfItems}</h3>
        </div>
    </div>);
}

export default CartHolder;