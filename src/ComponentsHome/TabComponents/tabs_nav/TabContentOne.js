import React, { Component } from 'react'
import img from  "./stream.svg"
import styled from "styled-components";


class TabContentOne extends Component {
    render() {
        return (
            <TabContentContainer className="container">
               <div className="tab-content">
                   <div>
                   <span>
                    Play Up es una plataforma de streaming desarrollada por estudiantes de
                    la Universidad Autónoma de Occidente, aquí podrás encontrar las mejores 
                    películas en la historia del cine, famosas producciones audiovisuales de Hollywood,
                    cortometrajes y largometrajes colombianos.
                   </span>
                   </div>
                   <img src={img}/>
               </div>
            </TabContentContainer>
        )
    }
}
export default TabContentOne;

//Main content container
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