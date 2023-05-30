import React from 'react';
import { useState,useEffect } from 'react';



function ProductList() {
    const [burgerData, SetBurgerData] = useState([]);
    function getData(data) {
        SetBurgerData(data);
    }

    useEffect(() => {
        fetch("http://localhost:9000/Burgers").then((res) => res.json()).then((data) => getData(data))
    },[])
    return (  <div className='productlist-container'>

            {
                burgerData.map((b) => (
                    <div className='All-products'>
                        <h2 style={{margin:"0"}}>{b.name}</h2>
                        <img src={b.image} alt="" />
                        <h3 style={{margin:"0"}} >Price: {b.price}</h3>
                        <button>Details</button>
                    </div>
                ))
            }
       
    </div>);
}

export default ProductList;