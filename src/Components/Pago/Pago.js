import React from 'react'
import Cards from 'react-credit-cards';
import '../../../node_modules/react-credit-cards/es/styles-compiled.css';
import './Pago.css'
import { useState }  from 'react'
import VideoBg from './Gradient.mp4';
import { Button } from 'react-bootstrap';

const Pago = () => {

     const [state, setstate] = useState({
        number:"",
        name:"",
        expiry:"",
        cvc:"",
        focus:"",
    })

    const handleInputChange = (e) => {
        setstate({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = e => {
        setstate({
            ...state,
            focus : e.target.name
        })
    }
    
    return(

        <div className="content">
            
            <video autoPlay loop muted
            style={{
                position:"absolute",
                width:"100%",
                left:"50%",
                top:"50%",
                height:"100%",
                objectFit:"cover",
                transform:"translate(-50%, -50%)",
                zIndex:"-1"
            }}
            >
                <source src={VideoBg} type="video/mp4" />
            </video>

            <div className="card">
            <div className="card-body">
                <Cards 
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />

            <form>
                <div className="form-group">
                    <label htmlFor="number" className="card-number"> Card number </label>
                    <input
                    
                    type="text" 
                    name="number"
                    id="number"
                    maxLength="16"
                    className="form-control input-bg"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                    />
                </div>

                <div className="form-row">

                    <div className="form-group col-md-6">
                        <label htmlFor="name"> Name </label>
                        <input
                        
                        type="text" 
                        name="name"
                        id="name"
                        maxLength="30"
                        className="form-control input-bg"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="name"> Email </label>
                        <input
                        
                        type="email" 
                        
                        maxLength="30"
                        className="form-control input-bg"
                        
                        
                        />
                    </div>

                </div>
                

                         <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="expiry"> Expiration data </label>
                                <input
                                maxLength="4"
                                type="number" 
                                name="expiry"
                                id="expiry"
                                className="form-control input-bg"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="cvc"> CVC </label>
                                <input
                                maxLength="4"
                                type="number" 
                                name="cvc"
                                id="cvc"
                                className="form-control input-bg"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                                />
                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group col-md-6">
                              <Button type="reset"variant="primary" block >Reset</Button>{' '}
                            </div>

                            <div className="form-group col-md-6">
                                 <Button variant="warning" block>Cancel</Button>{' '}
                            </div>

                        </div>

                        <Button type="submit" variant="success" block>Donate</Button>{' '}

                    </form>

                    </div>
                </div>

        </div>
        
    )
} 

export default Pago;

