import React from 'react'
import Movie from './Movie.mp4'
import './MoviePlay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {Button, Modal} from 'react-bootstrap';
import { useState }  from 'react'




function MoviePlay() {
 
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <button className="btnBack" onClick={handleShow}>
                <i>
                     <FontAwesomeIcon className="font-iconfaChevronLeft" icon={faChevronLeft}/>
                </i>
                
            </button>

            
            
            
            
            <video width="1280"  controls  >
                    <source src={Movie} type="video/mp4"/>
            </video>
            
        </div>
    )
}

export default MoviePlay
