import './Modal.css';
import ReactPlayer from 'react-player';
import FormPago from './FormPago/FormPago';




const Modal = ({children, isOpen, closeModal}) => {
    return (

        <div className="container_form_description">
            <script src="Script.js"></script>
            <article className={`modal ${isOpen && "is-open"}`} >
            <div className="modal-container">
                <button class="modal-close" onClick={closeModal} > X</button>
                <div className="containerPlayer">
                <ReactPlayer width='980px' height='552px' className="reproductor" controls url="https://www.youtube.com/watch?v=sOtsmM9KCnw" />
                </div>
                
                
                
                
                {children}
            </div>
        </article>
        </div>
        
    );
};

export default Modal;
