import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmedModal from '../componentsUi/ConfirmedModal';
function SwishPay() {

    const [SwishNumber, SetNumber] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [isPhoneNumber, setIsPhone] = useState(false);
    const [isPayed, setIsPayed] = useState(false);


    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    let [Orders, setOrders] = useState([]);
    const [delivertime, setDeliver] = useState(null);
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
        setDeliver(delivirytime.toLocaleTimeString());
        fetch("http://localhost:9000/Receipt",  {
            method: "POST",
            headers: 
            {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
          body: JSON.stringify({DeliverTime:delivirytime.toLocaleTimeString(),
                Number:SwishNumber,
                Order:Orders,
                Name:fullname,
                Email:email,
                Adress:adress,
                City:city,
                HouseNumber:houseNumber,})
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

                                <form style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px", gap:"20px"}}>
                                    <label>Fullname:</label>
                                    <input type="text" value={fullname} onChange={(event) => setFullname(event.target.value)} />

                                    <label>City:</label>
                                    <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />

                                    <label>Address:</label>
                                    <input type="text" value={adress} onChange={(event) => setAdress(event.target.value)} />

                                    <label>House number:</label>
                                    <input type="text" value={houseNumber} onChange={(event) => setHouseNumber(event.target.value)} />
                                </form>            

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
                    // THIS can also be like a modal !!!
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
                    <ConfirmedModal time={delivertime}/>
                )
            }
    </div>);
}

export default SwishPay;