import React, { useEffect, useState } from "react";
import './Navbar.css';
import logoPlay from "../Navbar/play_logo.png";


const Navbar= function(){

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);
    
    
    
    return(

        
            <div className={`nav ${show && 'nav__black'}`}>
                
                <div className="nav__contents">
                    <img src={logoPlay} alt="Home" className="nav__logo"></img>
                    
                    
                </div>
                
            </div>
        
        

    );
}

export default Navbar;