import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCartShopping } from "@fortawesome/free-solid-svg-icons";



function CartHolder() {

        let [NumberOfItems, SetItems] = useState(0);
    useEffect(() => {
        let CartNumber = localStorage.getItem("CartItems")
        let parsedItems = JSON.parse(CartNumber);

        SetItems(parsedItems.length);
    },[])
    return (  <div style={{display:"flex", backgroundColor:"#", justifyContent:"center", marginTop:"15px"}}>
        <div style={{marginTop:"10px"}}>
        <FontAwesomeIcon icon={faCartShopping} size="2xl" />
        </div>
        <div style={{marginLeft:"2px"}}>
            {NumberOfItems}
        </div>
    </div>);
}

export default CartHolder;