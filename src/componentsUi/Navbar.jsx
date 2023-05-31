import React, { useState } from 'react';

import logosalmon from "../images/logo color.png"
import MenuLogo from "../images/MenuMoble.png"
import { Link } from 'react-router-dom';

function Navbar() {

    const [Toggle, SetToggle] = useState(false);
    const [toggleBtn, SetButton] = useState(false);
    function NavMenuToggle() {

        if(Toggle === false){

            SetToggle(true)
        }
        else 
        {
            SetToggle(false)
        }
    }
    return (  <div className='Navbar-container'>
                <div className='Navbar-holder'>
                <div className='Navbar-logsalmon-container'>
                   <Link to={"/"}><img style={{height:"80px", marginLeft:"30px"}} src={logosalmon} alt="" /> </Link> 
                </div>
                <div className='Navbar-dropmenu'>
                    {!Toggle ?
                    (
                        <img  style={{height:"80px",width:"120px", transform:"rotate(0deg)", transition:"ease-in-out 0.5s", marginRight:"20px"}} onClick={NavMenuToggle} src={MenuLogo}></img>
                    ):
                    (
                        <img style={{height:"80px",width:"120px", transform:"rotate(90deg)", transition:"ease-in-out 0.5s"}} onClick={NavMenuToggle} src={MenuLogo}></img>
                    )

                    }
                    
                </div>
        </div>
            {!Toggle  ?(
                
                
                <div className='drop-menu-NoShow'>
                    
                </div>

            ):
            (
                <div className='drop-menu-Show'>

                    
                    <div className='highlightDiv'><Link style={{color:"whitesmoke", fontStyle:"normal",textDecoration:"none"}} to={"/home"}><h2>Home</h2></Link></div>
                    <div className='highlightDiv'><Link style={{color:"whitesmoke", fontStyle:"normal",textDecoration:"none"}} to={"/menu"}><h2>Menu</h2></Link></div>
                    <div className='highlightDiv'><Link style={{color:"whitesmoke", fontStyle:"normal",textDecoration:"none"}} to={"/order"}><h2>Orders</h2></Link></div>
                    <div className='highlightDiv'><Link style={{color:"whitesmoke", fontStyle:"normal",textDecoration:"none",}} to={"/"}><h2>Login</h2></Link></div>    
                </div>
            ) 

            }
    </div>);
}

export default Navbar;