import React from 'react';
import { useState,useEffect } from 'react';



function ProductList(burger) {
    function addToCart() {
        let Cart = localStorage.getItem("CartItems")

        if(!Cart){  
            Cart = [];
        }
        else {
            Cart = JSON.parse(Cart)
        }
        Cart.push({ name:burger.name, price:burger.price});
        localStorage.setItem("CartItems", JSON.stringify(Cart));
        alert(burger.name, "was added")
        
    }
    return (  <div >

                    <div className='All-products'>
                        <h2 style={{margin:"0", fontSize:"22px"}}>{burger.name}</h2>
                        <img style={{width:"303px"}} src={burger.image} alt="" />
                        <h3 style={{margin:"0"}} >Price: {burger.price}</h3>
                        <button onClick={addToCart}>Details</button>
                    </div>
       
    </div>);
}

export default ProductList;