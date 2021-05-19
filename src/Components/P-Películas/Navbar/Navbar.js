import React from "react";
import './Navbar.css';
import logoPlay from "../Navbar/play_logo.png";
import profilePic from '../Navbar/Profile men.png';

const Navbar= function(){
    
    return(

        
            <div className='nav nav__black'>
                
                <div className="nav__contents">
                    <img src={logoPlay} alt="Home" className="nav__logo"></img>
                    <img src={profilePic} alt="Profile" className="nav__avatar" ></img>
                    
                </div>
                
            </div>
        
        

    );
}

export default Navbar;