import React, { useState } from 'react';
import Navbar from '../componentsUi/Navbar';
import Footer from '../componentsUi/Footer';
import bigLogo from "../images/logo color.png"
import { Link } from 'react-router-dom';

function Home() {

    return ( <div className='Home-component'>
        <div style={{position:"sticky"}}>
            <Navbar/>
        </div>
            
        <div className='Home-container'>
            <div className='IntroWelcom-text'>
                <h1>Welcome To Bun Drop</h1>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} className='IntroDescription-text'>
                <h3>The fast food resturant who delivers</h3>
                <h3>With a easy click!</h3>
            </div>
                <img style={{height:"200px", width:"200px", marginTop:"40px"}} src={bigLogo} alt='no image'></img>
                <Link to={"/menu"} ><button style={{width:"200px", height:"50px", marginTop:"60px", backgroundColor:"#FFA07A", borderRadius:"10px"}}>Menu</button></Link>
                
        </div>
        <Footer/>
    </div>);
}

export default Home;