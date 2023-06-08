import React from 'react';


//// target="_blank"  === Opens a new tab ALSO if u want to use rel="noopener noreferrer"
/// it apperantly works as to prevent any potential security risks associated with opening the link in a new tab.



function Footer() {
    return ( <div style={{display:"flex", position:"fixed", bottom:"0", backgroundColor:"black", width:"100%", justifyContent:"space-evenly"}}>
        <a style={{textDecoration:"none"}} href='https://www.youtube.com/watch?v=9WnRInVlWbs' target="_blank" >

            <div style={{display:"flex", alignItems:"center", gap:"2px"}} >
            <h3 style={{color:"white"}} >Instagram</h3>
            <img style={{width:"30px", height:"30px"}} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-1200x1199.png" alt="error" />
            </div>

        </a>
        <a style={{textDecoration:"none"}}  href='https://www.youtube.com/watch?v=yVLfEHXQk08' target="_blank" >

            <div style={{display:"flex", alignItems:"center", gap:"2px"}} >
            <h3 style={{color:"white"}} >facebook</h3>
            <img style={{width:"30px", height:"30px"}} src="https://p7.hiclipart.com/preview/424/88/63/computer-icons-facebook-logo-clip-art-black-and-white-icon.jpg" alt="error" />
            </div>
            
        </a>
        <a style={{textDecoration:"none"}}  href='https://www.youtube.com/watch?v=dlXSJ83T9Lg' target="_blank" rel="noopener noreferrer" >

            <div style={{display:"flex", alignItems:"center", gap:"2px"}} >
            <h3 style={{color:"white"}} >LinkedIn</h3>
            <img style={{width:"30px", height:"30px"}} src="https://www.citypng.com/public/uploads/preview/hd-linkedin-square-black-icon-transparent-background-11640440466zdofrsi3gy.png" alt="error" />
            </div>
            
        </a>
    </div>);
}



export default Footer;