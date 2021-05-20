import React from 'react'
import '../Banner.css';

const BotonBanner=  function (props) {
    var textoBtn =props.texto;
    return (
        <div>
            <button className="banner__button">{textoBtn}</button>
        </div>
    );
}

 export default BotonBanner;
