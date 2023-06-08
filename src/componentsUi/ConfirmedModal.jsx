import React from 'react';

import { Link } from 'react-router-dom';




function ConfirmedModal(props) {
    return (    <div className='modal'>
                    <h1 className="text-modal" >Congratz you Order is on the way!</h1>
                    <h2 className="text-modal" > Visit Reciept to check you order</h2>
                    <Link to={"/receipt"}><button>Reciepts</button></Link>
                    <h1 className="text-modal" style={{textDecoration:"underline"}}>Your food will arrive at</h1>
                    <h1 className="text-modal">{props.time}</h1>

                    <img style={{borderRadius:"900px", zIndex:"-1", height:"300px", width:"300px", border:"solid white 12px"}} src='https://media0.giphy.com/media/YWUvOugDNUBS0MTqkv/giphy.gif?cid=ecf05e47ue2adwql6dkpg5x2y8wxbvfhty0s7xzhy7ssqra0&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='Error, img not found'/>
                </div>);
}

export default ConfirmedModal;