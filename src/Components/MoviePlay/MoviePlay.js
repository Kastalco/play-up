import React from 'react'
import Movie from './Movie.mp4'
import './MoviePlay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {Button, Modal} from 'react-bootstrap';
import { useState }  from 'react'
import { useModal } from '../P-Películas/Modals/useModal';
import ModalMovie from './ModalMovie/ModalMovie';




function MoviePlay() {
 
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    
    return (
        <div>
            
            <ModalMovie isOpen={isOpenModal1} closeModal={closeModal1}>


            </ModalMovie>

            <button className="btnBack" onClick={openModal1}>
                <i>
                     <FontAwesomeIcon className="font-iconfaChevronLeft" icon={faChevronLeft}/>
                </i>
                
            </button>

            
            
            
            
            <video width="1280"  controls  autoPlay>
                    <source src={Movie} type="video/mp4"/>
            </video>
            
        </div>
    )
}

export default MoviePlay
