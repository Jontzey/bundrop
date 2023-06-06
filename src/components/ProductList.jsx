import React from 'react';
import { useState,useEffect } from 'react';



function ProductList(burger) {

    function addToCart() {
        let Cart = localStorage.getItem("CartItems")

        if(!Cart){  
            Cart = [];
        }
        else {
            Cart = JSON.parse(Cart);
        }
        /// Chat gpt
        const newId = Cart.length > 0 ? Cart[Cart.length - 1].id + 1 : 0;
        ///
        Cart.push({id:newId, name:burger.name, price:burger.price,image: burger.image});
        localStorage.setItem("CartItems", JSON.stringify(Cart));
        alert(burger.name, "was added")
        
        let total = Cart.reduce((accumulator, item) => accumulator + item.price, 0);

        let TotalPrice = localStorage.getItem("TotalPrice");
        if(!TotalPrice){  
            TotalPrice = {TotalP:0};
        }
        else {
            TotalPrice = JSON.parse(TotalPrice)
        }
        TotalPrice.TotalP = total;
        localStorage.setItem("TotalPrice", JSON.stringify(TotalPrice));
        console.log(total);

        let number = Cart.length;
        
        let cartItemsNumberDisplayer = localStorage.getItem("NumberOfCartItems")
        if(!cartItemsNumberDisplayer){  
            cartItemsNumberDisplayer = {Items: 0};
        }
        else {
            cartItemsNumberDisplayer = JSON.parse(cartItemsNumberDisplayer)
        }
        cartItemsNumberDisplayer = number;
        localStorage.setItem("NumberOfCartItems", JSON.stringify(cartItemsNumberDisplayer));

        // TEST
        burger.CartHolder(number);
  
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