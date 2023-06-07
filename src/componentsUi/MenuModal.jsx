import React from 'react';




function MenuModal(props) {
    return ( <div className='menu-modal-content'>
            <h1>Item added to cart:</h1>
           <h3>{props.name}</h3>
           <h3>{props.price}kr</h3>
           <button style={{marginBottom:"20px", width:"200px"}} onClick={props.isModal}>OK</button>
    </div> );
}

export default MenuModal;