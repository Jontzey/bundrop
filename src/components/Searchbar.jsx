import React from 'react';




function Searchbar() {
    return (  <div style={{display:"flex", justifyContent:"center", marginTop:"10px", flexDirection:"column", alignItems:"center"}}>
        <h3>Search for your favorite!</h3>
        <input type='text'/>
    </div>);
}

export default Searchbar;