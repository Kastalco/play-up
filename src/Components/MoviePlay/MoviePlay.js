import React from 'react'
import ReactPlayer from 'react-player';
import Movie from './Movie.mp4'

function MoviePlay() {
    return (
        <div>
            <div className="banner">
                <video autoPlay muted loop>
                    <source src={Movie} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default MoviePlay
