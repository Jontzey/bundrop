import React, { useState } from 'react';





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
    function setWindowState() {
        if(popWindow === false){
            setPopWindow(true);
            props.GetNotificationNotImplemented(popWindow)
        }
        else{
            setPopWindow(false)
            props.GetNotificationNotImplemented(popWindow)
        }
    }
    
    return ( <div className='MenySele-container'>
        <button onClick={getNotiWindow} className='btnSel'>+ Menu</button>
        <button onClick={getNotiWindow} className='btnSel'>Drinks</button>
        <button onClick={getNotiWindow} className='btnSel'>Burgers</button>
        {!popWindow ? (
            <div >
                
            </div>
        ):(
            <div className='TestFunction'>
                <h1>Sorry</h1>
                <h3>this function is not implemented yet</h3>
                <button onClick={setWindowState}>Ok</button>
            </div>
        )

        }
    </div> );
}

export default ProductSelection;