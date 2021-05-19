import React from 'react'
import './Banner.css';

const Banner = function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://wallpapercave.com/wp/wp7123665.jpg")`,
            backgroundPosition:"center center",
        }}>

        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            
            <div className="banner__buttons">
                <button className="banner__button">Reproducir</button>
                <button className="banner__button">Más información</button>
            </div>
            <h1 className="banner__description">This is a test description</h1>
        </div>

        <div className="banner--fadeBottom">

        </div>
        

        </header>
    )
}

export default Banner
