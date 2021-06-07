import React, { useEffect, useState } from 'react'
import './Banner.css';
import { Link } from 'react-router-dom';
import axios from '../../../../src/Axios/Axios';
import requests from '../../../../src/Request';
import { useModal } from '../Modals/useModal';
import Modal from '../Modals/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

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
                    

                    <div className="text_buttons">
                        <div className="text">
                            <h1 className="banner__title__modal ">
                            {movie?.title || movie?.name || movie?.original_name}
                            </h1>
                            <h1 className="banner__description__modal"> {truncate( movie?.overview, 160)}</h1>
                        </div>

                       
                        <div className="payment">
                            
                           
                                
                            

                            <div className="buttons form-group ">
                                <h1 className="watch-mode-text"> Watch Mode</h1>
                                <Link to="/" class="btn btn-danger">Free
                                
                                    <FontAwesomeIcon className="font-iconfaHeart" icon={faHeartBroken} />
                                
                                </Link>


                                <Link to="/donation" class="btn btn-success"> 
                                
                                    Donate
                                    <FontAwesomeIcon className="font-iconfaHeart" icon={faHeart} />
                                </Link>

                                
                            </div>

                        </div>
                       
                        
                    </div>
                    
            </Modal>

        <div className="banner__contents">
            <h1 className="banner__title ">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <div className="banner__buttons">
                
                <button className="banner__button" onClick={openModal1}> Play</button>
            </div>
            <h1 className="banner__description"> {truncate( movie?.overview, 150)}</h1>
        </div>

        <div className="banner--fadeBottom">

        </div>
        

        </header>
    )
}

export default Banner
