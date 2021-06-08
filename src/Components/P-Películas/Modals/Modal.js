import './Modal.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';




const Modal = ({children, isOpen, closeModal}) => {
    return (

        <div className="container_form_description">
            <script src="Script.js"></script>
            <article className={`modal ${isOpen && "is-open"}`} >
            <div className="modal-container">
                <button class="modal-close" onClick={closeModal}>
                    <i>
                        <FontAwesomeIcon className="font-iconfaHeart" icon={faTimesCircle} />
                    </i>
                </button>
                <div className="containerPlayer">
                <ReactPlayer width='980px' height='552px' className="reproductor"  url="https://vimeo.com/407972445" />
             </div>
                
                
                
                
                {children}
            </div>
        </article>
        </div>
        
    );
};

export default Modal;
