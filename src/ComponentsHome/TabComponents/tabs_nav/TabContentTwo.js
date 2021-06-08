import React, { Component } from 'react'
import img from  "./money.svg"
import styled from "styled-components";


class TabContentTwo extends Component {
    render() {
        return (
            <TabContentContainer className="container">
               <div className="tab-content">
                   <div>
                   <span>
                   Play Up  es un proyecto que surge en respuesta a la coyuntura del Covid 19,
                    en donde niños que cursan primaria y secundaria no cuentan con los 
                   recursos necesarios para ver clases virtuales desde su hogar.
                   </span>
                   <span>
                   Es por esto que play up recibe de forma voluntaria el pago por ver una película,
                    ya que los fondos recaudados serán destinados para aquellos niños que 
                   requieran de equipos tecnológicos para ver clases virtuales.
                   </span>
                   </div>
                   <img src={img}/>
               </div>
            </TabContentContainer>
        )
    }
}
export default TabContentTwo;

const TabContentContainer = styled.div`

    background: var(--main-deep-dark);
    .container{
        margin: 0 10%;
    }
    img{
        width: 23rem;
        margin-left: 10rem;
    }

    .tab-content{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        font-size: 1.4rem;
        padding: 2.5rem;
    }

`;