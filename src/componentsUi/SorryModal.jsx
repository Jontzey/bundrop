import React from 'react';




function SorryModal(props) {
    return (    <div className='menu-modal-content'>
                    <h1>Sorry</h1>
                    <h3>this function is not implemented yet</h3>
                    <button style={{marginBottom:"20px", width:"200px"}} onClick={props.isModal}>Ok</button>
                </div> );
}

export default SorryModal;