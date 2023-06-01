import React, { useState } from 'react';




function Searchbar(props) {


    return (  <div style={{display:"flex", justifyContent:"center", marginTop:"0px", flexDirection:"column", alignItems:"center"}}>
        <h3>Search for your favorite!</h3>
        <input onChange={(e) => {
            props.SearchB(e.target.value)
        }}  type='text'/>
    </div>);
}

export default Searchbar;