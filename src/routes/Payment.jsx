import React, { useState } from 'react';

import Navbar from '../componentsUi/Navbar';
import VisaPay from '../components/VisaPay';
import SwishPay from '../components/SwishPay';
import Footer from '../componentsUi/Footer';


function Payment() {

    const [Swish, SetSwish] = useState(false);
    const [Visa, SetVisa] = useState(false);
    const [SwishNumber, SetNumber] = useState("");
    function Paymentmethod1() {
        SetSwish(true);
        SetVisa(false);
        console.log("Swish",Visa,Swish);
    }
  
    function Paymentmethod2() {
        SetVisa(true);
        SetSwish(false);
        console.log("Visa",Visa,Swish);
    }


    function SetCondition(e){
        
        SetNumber(e);
        console.log(SwishNumber)
    }
    return (  <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
       <Navbar/>
       <h1>Press to choose pay method</h1>
       <div className='ICON-choosing'>
        <img onClick={Paymentmethod1} className='Pay-logo' src="https://www.repolina.se/wp-content/uploads/2017/11/Swish-logo.jpg" alt="Error" />
        <img onClick={Paymentmethod2} className='Pay-logo' src="https://logowik.com/content/uploads/images/219_visa.jpg" alt="Error" />
       </div>
       { Swish === true ?(
        <div>
           <SwishPay/>
        </div>
       ):Visa === true ?
       (
        <div>
            <VisaPay/>
        </div>
       ):
       (
        <div style={{fontSize:"40px", marginTop:"40px"}}>
           No payment method been choosen, please press one of icons
        </div>
       )

       }
       <Footer/>
    </div>);
}

export default Payment;