import React, { useState } from 'react';
import SorryModal from '../componentsUi/SorryModal';





function ProductSelection(props) {

    const [popWindow, setPopWindow] = useState(false);

    function getNotiWindow() {

        if(popWindow === false){
            setPopWindow(true);
            props.GetNotificationNotImplemented(popWindow)
        }
        else{
            setPopWindow(false)
            props.GetNotificationNotImplemented(popWindow)
        }
        
    }
    function getModalState() {

        setPopWindow(false);
    }
    function outsideModal(){
        setPopWindow(false);
    }
    
    return ( <div className='MenySele-container-div'>
        <div className='MenySele-container'>
            <button onClick={getNotiWindow} className='btnSel'>+ Menu</button>
        <button onClick={getNotiWindow} className='btnSel'>Drinks</button>
        <button onClick={getNotiWindow} className='btnSel'>Burgers</button>
        </div>
        
        {!popWindow ? (
            <div >
                
            </div>
        ):(
            <div className='menu-modal' onClick={outsideModal}>
                <SorryModal isModal={getModalState}/>
            </div>
        )

        }
    </div> );
}

export default ProductSelection;