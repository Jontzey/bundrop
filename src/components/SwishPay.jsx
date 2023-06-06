import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SwishPay() {

    const [SwishNumber, SetNumber] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [isPhoneNumber, setIsPhone] = useState(false);
    const [isPayed, setIsPayed] = useState(false);


    let [Orders, setOrders] = useState([]);

    useEffect(() => {
        setIsPayed(false);
        let finalOrder = localStorage.getItem("CartItems");

        if(!finalOrder){
            finalOrder = [];
        }
        else{
            finalOrder = JSON.parse(finalOrder);
        }
        setOrders(finalOrder);
        console.log(finalOrder);
    },[])

    function SetCondition(e){
        
        SetNumber(e);
        console.log(SwishNumber)
    }
    function submitSwish() {
        if(SwishNumber.length < 9) {
            setIsPhone(true);
            if(confirm === true){
                setConfirm(false);
            }
        }
        else {
            setConfirm(true);

            if(isPhoneNumber === true){
                setIsPhone(false);
            }

        }
    }
    function AdmitPay() {
        setConfirm(false);
        let currentTime = new Date();
        let mintime = 20;
        let maxtime = 60;
        let randomtime = Math.floor(Math.random() * (maxtime - mintime + 1)) + mintime;

        let delivirytime = new Date(currentTime.getTime() + randomtime * 60000)
        fetch("http://localhost:9000/Receipt",  {
            method: "POST",
            headers: 
            {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
          body: JSON.stringify({DeliverTime:delivirytime.toLocaleTimeString(),Number:SwishNumber, Order:Orders})
    })
        localStorage.clear();
        setIsPayed(true);
    }
    function CancelPay() {
        setConfirm(false);
    }
    return ( <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
        <h1 style={{color:"whitesmoke"}}>Swish Payment</h1>
        <h2 style={{color:"black"}}>Enter phone number</h2>
            <input onChange={(e) => {
                SetCondition(e.target.value)
            }} type='tel' placeholder='070-2344832' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            <button onClick={submitSwish}>Submit</button>
            {
                !isPhoneNumber ? (
                    <div>

                    </div>
                ): (
                    <h3>The phone number you entered is to short</h3>
                    
                )
            }
            {
                !confirm ? 
                (
                    <div>
                       
                    </div>
                )
                :
                (
                    <div style={{display:"flex", backgroundColor:"grey", flexDirection:"column", borderRadius:"120px", marginTop:"20px"}}>
                        <h1>Confirm payment</h1>
                        <div style={{display:"flex", justifyContent:"space-evenly"}}>
                            <button onClick={AdmitPay}>Pay</button>
                            <button onClick={CancelPay}>Cancel</button>
                        </div>
                    </div>
                )
            }
            {
                !isPayed ?(
                    <div>

                    </div>
                ):
                (
                    <div>
                        <h1>Congratz you Order is on the way!</h1>
                        <h2> Visit Reciept to check you order</h2>
                        <Link to={"/receipt"}><button>Reciepts</button></Link>
                    </div>
                )
            }
    </div>);
}

export default SwishPay;