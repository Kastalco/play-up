import React from 'react'
import ReactPlayer from 'react-player';
import Movie from './Movie.mp4'
import Navbar from '../P-Películas/Navbar/Navbar';
import './MoviePlay.css'



function MoviePlay() {

    
    return (
        <div>
          <video width="1280"  controls autoPlay >
                    <source src={Movie} type="video/mp4"/>
        </video>
            
        </div>
    )
}

export default MoviePlay
