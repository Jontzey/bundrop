
import Navbar from '../componentsUi/Navbar';

import ProductList from "../components/ProductList"
import ProductSelection from '../components/ProductSelection';
import { useEffect, useState } from 'react';



function Menu() {

    const [isWindow, setWindow] = useState(false);
    function getNotiWindow(isWindowF) {

        setWindow(isWindowF)
        console.log(isWindow)
       
        
    }
  

    return ( <div>
        <Navbar/>
        <ProductSelection GetNotificationNotImplemented={getNotiWindow} />
        <ProductList/>
    </div>);
}

export default Menu;