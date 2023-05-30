import React from 'react';
import { useState,useEffect } from 'react';



function ProductList(burger) {
    return (  <div >

                    <div className='All-products'>
                        <h2 style={{margin:"0", fontSize:"22px"}}>{burger.name}</h2>
                        <img src={burger.image} alt="" />
                        <h3 style={{margin:"0"}} >Price: {burger.price}</h3>
                        <button>Details</button>
                    </div>
       
    </div>);
}

export default ProductList;