import './ModalMovie.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';





const ModalMovie = ({children, isOpen, closeModal}) => {
    return (

        <div className="container_form_description">
            <script src="Script.js"></script>
            <article className={`modal ${isOpen && "is-open"}`} >
            <div className="modal-containerM">
                <div className="headerModal">
                     <h1>Warning</h1>
                     <FontAwesomeIcon className="font-iconExclamationCircle" icon={faExclamationCircle} />
                </div>

                <div className="bodyModal">
                <p>Before to exit, remember the movie's token to watch it again (Avaiable for 24 hours)</p>
                    <div className="token-info">
                        <p className="token-text">Token:</p>
                        <p className="token-value">asftr5798</p>

                    </div>                
                </div>

                <div className="buttons-container">
                        <div className=".btn-modall">
                                <Link  to="./movies">
                                    <button className="form-group  btn btn-warning" >
                                        Exit
                                    </button> 
                                </Link >
                        </div>
                         
                       <div className="btn-modall">
                            <button className="form-group col-md-12 btn btn-success" onClick={closeModal}>
                                    Continue watching
                                </button >
                       </div>
                       
                        
                 
                </div>
                
                
                
                
                {children}
            </div>
        </article>
        </div>
        
    );
};

export default ModalMovie;
