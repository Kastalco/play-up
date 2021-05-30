import React, { useEffect, useState } from 'react'
import './Banner.css';
import BotonBanner from './BotonBanner/BotonBanner';
import axios from '../../../../src/Axios/Axios';
import requests from '../../../../src/Request';
import { useModal } from '../Modals/useModal';
import Modal from '../Modals/Modal';

const Banner = function Banner() {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
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
            
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <h3>Modal1</h3>
                    <p>Contenido modal 1</p>
                    <img src="https://placeimg.com/400/400/animals" alt="Animals" />
            </Modal>

        <div className="banner__contents">
            <h1 className="banner__title ">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <div className="banner__buttons">
                <BotonBanner texto="Reproducir"/>
                <BotonBanner texto="Más información"/>
                <button onClick={openModal1}> ModalBanner</button>
            </div>
            <h1 className="banner__description"> {truncate( movie?.overview, 150)}</h1>
        </div>

        <div className="banner--fadeBottom">

        </div>
        

        </header>
    )
}

export default Banner
