import React from 'react'
import Cards from 'react-credit-cards';
import '../../../node_modules/react-credit-cards/es/styles-compiled.css';
import './Pago.css'
import { useState }  from 'react'

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
                    <label htmlFor="number"> Card number </label>
                    <input
                    
                    type="text" 
                    name="number"
                    id="number"
                    maxLength="16"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name"> Name </label>
                    <input
                    
                    type="text" 
                    name="name"
                    id="name"
                    maxLength="30"
                    className="form-control"
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="expiry"> Expiration data </label>
                        <input
                        maxLength="4"
                        type="text" 
                        name="expiry"
                        id="expiry"
                        className="form-control"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="cvc"> CVC </label>
                        <input
                        maxLength="4"
                        type="text" 
                        name="cvc"
                        id="cvc"
                        className="form-control"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                        />
                    </div>

                </div>


            </form>

            </div>
        </div>
    )
} 

export default Pago;

