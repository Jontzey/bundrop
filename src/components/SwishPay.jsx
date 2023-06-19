import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmedModal from '../componentsUi/ConfirmedModal';
import Footer from '../componentsUi/Footer';
function SwishPay() {

    const [SwishNumber, SetNumber] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [isPhoneNumber, setIsPhone] = useState("");
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

   
    function handleSubmit(event) {

        // används för att stoppa den vanliga handlingen som normalt sett skulle ske när ett event inträffar. I en formulärsituation används det för att förhindra att formuläret skickas och att sidan laddas om. Istället kan du använda JavaScript-kod för att hantera inskickandet på ett anpassat sätt, till exempel genom att validera data eller göra en API-förfrågan.
        // event.preventDefault();

       
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
                Number:isPhoneNumber,
                Order:Orders,
                Name:fullname,
                Adress:adress,
                City:city,
                HouseNumber:houseNumber,})
    })
        localStorage.clear();
        setIsPayed(true);
    }
   
    return ( <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>

                             <h1 style={{color:"whitesmoke", margin:"0"}}>Swish Payment</h1>
            {
                !isPayed ?(

                                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px", gap:"20px"}}>

                                    
                                    <label>Phone number:</label>
                                    <input type="text" required value={isPhoneNumber} onChange={(event) => setIsPhone(event.target.value)} />

                                    <label>Fullname:</label>
                                    <input type="text" required value={fullname} onChange={(event) => setFullname(event.target.value)} />

                                    <label>City:</label>
                                    <input type="text" required value={city} onChange={(event) => setCity(event.target.value)} />

                                    <label>Address:</label>
                                    <input type="text" required value={adress} onChange={(event) => setAdress(event.target.value)} />

                                    <label>House number:</label>
                                    <input type="text" required value={houseNumber} onChange={(event) => setHouseNumber(event.target.value)} />
                                    <button style={{height:"50px", width:"200px",backgroundColor:"lightgreen"}} type='submit'>Submit Pay</button>
                                </form>            
                  
                ):
                (
                    <ConfirmedModal time={delivertime}/>
                )
            }
          
    </div>);
}

export default SwishPay;