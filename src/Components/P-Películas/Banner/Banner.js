import React, { useEffect, useState } from 'react'
import './Banner.css';
import BotonBanner from './BotonBanner/BotonBanner';
import axios from '../../../../src/Axios/Axios';
import requests from '../../../../src/Request';

const Banner = function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fecthData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }

        fecthData();
    }, []);

    console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}>

        <div className="banner__contents">
            <h1 className="banner__title ">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <div className="banner__buttons">
                <BotonBanner texto="Reproducir"/>
                <BotonBanner texto="Más información"/>
            </div>
            <h1 className="banner__description"> {truncate( movie?.overview, 150)}</h1>
        </div>

        <div className="banner--fadeBottom">

        </div>
        

        </header>
    )
}

export default Banner
