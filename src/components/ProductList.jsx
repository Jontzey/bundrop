import React from 'react';
import { useState,useEffect } from 'react';
import MenuModal from '../componentsUi/MenuModal';


function ProductList(burger) {
    
    const [isAdded, setAdded] = useState(false);
    function addToCart() {
        let Cart = localStorage.getItem("CartItems")

        if(!Cart){  
            Cart = [];
        }
        else {
            Cart = JSON.parse(Cart);
        }
        /// got this from Chat gpt 
        //this code checks as i can read it if cart length is more than 0 else and no item exist give that zero and if there is item then add + 1 to id
        const newId = Cart.length > 0 ? Cart[Cart.length - 1].id + 1 : 0;
        ///
        Cart.push({id:newId, name:burger.name, price:burger.price,image: burger.image});
        localStorage.setItem("CartItems", JSON.stringify(Cart));
        
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
        burger.CartHolder(number);


        setAdded(true);
  
    }

    function funcModal(props){
        setAdded(false);
    }
    function isModalNotClicked() {
        setAdded(false);
    }
    return (  <div >

                    <div className='All-products'>
                        <h2 style={{margin:"0", fontSize:"22px", color:"white"}}>{burger.name}</h2>
                        <img style={{width:"303px"}} src={burger.image} alt="img error" />
                        <h3 style={{margin:"0", color:"white"}} >Price: {burger.price}</h3>
                        <button className='add-btn' onClick={addToCart}>Add</button>
                    </div>
                    {!isAdded ? 
                    (
                        <div>

                        </div>
                    )
                    :
                    (
                        <div className='menu-modal' onClick={isModalNotClicked}>
                            <MenuModal name={burger.name} price={burger.price} isModal={funcModal}/>

                        </div>
                    )

                    }
       
    </div>);
}

export default ProductList;