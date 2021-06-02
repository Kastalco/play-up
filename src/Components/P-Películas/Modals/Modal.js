import './Modal.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';


const Modal = ({children, isOpen, closeModal}) => {
    return (

        <div className="container_form_description">
            <article className={`modal ${isOpen && "is-open"}`} >
            <div className="modal-container">
                <button class="modal-close" onClick={closeModal} > X</button>
                <div className="containerPlayer">
                
                </div>
                
                <div className="container_form">
                        <header>Login Form</header>
                        
                        <div className="progress-bar">
                        <div className="step">
                                <p>Name</p>
                                <div className="bullet">
                                    <span>1</span>
                                    
                                </div>
                                <FontAwesomeIcon className="check" icon={faCheck} />
                           </div>

                            <div className="step">
                                <p>Contact</p>
                                <div className="bullet">
                                    <span>2</span>
                                </div>
                                <FontAwesomeIcon className="check" icon={faCheck} />
                            </div>

                            <div className="step">
                                <p>Birth</p>
                                <div className="bullet">
                                    <span>3</span>
                                </div>
                                <FontAwesomeIcon className="check" icon={faCheck} />
                            </div>

                            <div className="step">
                                <p>Submit</p>
                                <div className="bullet">
                                    <span>4</span>
                                </div>
                                <FontAwesomeIcon className="check" icon={faCheck} />
                            </div>
                        </div>

                        
                        <div className="form-outer">
                            <form action="#">
                            <div className="page">
                                <div className="title">Basic Info:</div>

                                <div className="field">
                                    <div className="label">First Name</div>
                                    <input type="text" />
                                </div>

                                <div className="field">
                                    <div className="label">Last Name</div>
                                    <input type="text" />
                                </div>

                                <div className="field">
                                    <button>Next</button>
                                </div>
                            </div>

                            <div className="page">
                                <div className="title">Contact Info:</div>

                                <div className="field">
                                    <div className="label">E-mail</div>
                                    <input type="text" />
                                </div>

                                <div className="field">
                                    <div className="label">Phone Number</div>
                                    <input type="number" />
                                </div>

                                <div className="field btns">
                                    <button className="prev-1 prev">Previous</button>
                                    <button className="Next-1 next">Next</button>
                                </div>
                            </div>

                            <div className="page">
                                <div className="title">Date of Birth:</div>

                                <div className="field">
                                    <div className="label">Date</div>
                                    <input type="text" />
                                </div>

                                <div className="field">
                                    <div className="label">Gender</div>
                                    <select>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="field btns">
                                    <button className="prev-2 prev">Previous</button>
                                    <button className="Next-2 next">Next</button>
                                </div>
                            </div>

                            <div className="page">
                                <div className="title">Login Details:</div>

                                <div className="field">
                                    <div className="label">Username</div>
                                    <input type="text" />
                                </div>

                                <div className="field">
                                    <div className="label">Password</div>
                                    <input type="password" />
                                </div>

                                <div className="field btns">
                                    <button className="prev-3 prev">Previous</button>
                                    <button className="Submit">Submit</button>
                                </div>
                            </div>

                            </form>
                        </div>
                </div> 
                
                {children}
            </div>
        </article>
        </div>
        
    );
};

export default Modal;
