import React, { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';


function VisaPay() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [phone, setPhone] = useState("");
    const [isPayed, setIsPayed] = useState(false);

    const [delivertime, setDeliver] = useState(null);
    
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        let finalOrder = localStorage.getItem("CartItems");

        if(!finalOrder){
            finalOrder = [];
        }
        else{
            finalOrder = JSON.parse(finalOrder);
        }
        setOrders(finalOrder);
    },[])

 
    
    function handleSubmit(event) {
        // används för att stoppa den vanliga handlingen som normalt sett skulle ske när ett event inträffar. I en formulärsituation används det för att förhindra att formuläret skickas och att sidan laddas om. Istället kan du använda JavaScript-kod för att hantera inskickandet på ett anpassat sätt, till exempel genom att validera data eller göra en API-förfrågan.
        event.preventDefault();
        
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
                Number:phone,
                Order:orders,
                Name:fullname,
                Email:email,
                Adress:adress,
                City:city,
                HouseNumber:houseNumber,
                
            })
        }).then((res) => {
            if(res.ok) {
                
                localStorage.clear();
                setIsPayed(true);
                console.log(isPayed);        

            }
        })
      
        
    }
    return ( <div>
       
        {
                !isPayed ?(

                                    // THERE IS NO CHECK FOR if elements are emty or not.
                    
                                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px", gap:"20px"}}>
                                    <h1 style={{color:"whitesmoke"}}> Visa Payment</h1>
                                    <label>Fullname:</label>
                                    <input type="text" value={fullname} onChange={(event) => setFullname(event.target.value)} />

                                    <label>Email:</label>
                                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />

                                    <label>City:</label>
                                    <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />

                                    <label>Address:</label>
                                    <input type="text" value={adress} onChange={(event) => setAdress(event.target.value)} />

                                    <label>House number:</label>
                                    <input type="text" value={houseNumber} onChange={(event) => setHouseNumber(event.target.value)} />

                                    <label>Phone number:</label>
                                    <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />

                                    <button type='submit'>Submit</button>
                                </form>
                   
                ):
                (
                    //This can be trown in to component becuase this code is used two times! in both VISA PAY AND SWISCH PAY!
                    <div className='modal'>
                        <h1 className='text-modal'>Congratz you Order is on the way!</h1>
                        <h2 className="text-modal"> Visit Reciept to check you order</h2>
                        <Link to={"/receipt"}><button>Reciepts</button></Link>
                        <h1 className="text-modal" style={{textDecoration:"underline"}}>Your food will arrive</h1>
                        <h1 className="text-modal">{delivertime}</h1>
                    </div>
                )
            }
    </div> );
}

export default VisaPay;