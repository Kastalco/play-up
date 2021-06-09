import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {Icon} from 'react-icons-kit'
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

 class Home extends Component {
    render() {
        return (
           <HeaderComponent className="header-container">
               <Top className="header-top">
               </Top>
               <div className="header-content">
                   <Title>LAS MEJORES PELÍCULAS Y DOCUMENTALES</Title>
                   <SubTitle>Disfruta todo lo que quieras, el precio lo pones tú</SubTitle>
                   <Link to="/movies" className="main-offer-btn"> 
                   Comenzar  
                   
                   </Link>
               </div>
           </HeaderComponent>
        );
    }
}
export default Home;



//HeaderTop
const Top = styled.div`
padding-bottom: 15rem;
`;
//Main Title
const Title = styled.h1`
margin: 0 0 1.8rem;
font-family:Poppins;
font-size:2.5rem;
fot-weight:900;
text-shadow: 1px 1px 1px #1010102a,
1px 2px 1px #1010102a,
1px 3px 1px #1010102a,
1px 4px 1px #1010102a,
1px 5px 1px #1010102a,
1px 6px 1px #1010102a,
1px 7px 1px #1010102a,
1px 8px 1px #1010102a,
1px 9px 1px #1010102a,
1px 10px 1px #1010102a;


}
`;

//SubTitle
const SubTitle = styled.h2`
font-weight:400;
font-size: 1rem;
font-family:Poppins;
line-height: 1.25em;
margin: 0 0 1.875rem;
text-transform: uppercase;
margin-bottom:5rem
`;

//HeaderContent
const HeaderComponent =styled.div`
.header-content{
    width:65%;
    font-family:Roboto;
    position: relative;
    margin 4.5 rem auto 0;
    display: flex;
    justify-content:center;
    align-content:center;
    text-align:center;
    flex-direction: column;
    z-index:1;
    margin-left:15rem
}
//main-offer-btn
.main-offer-btn{
    color: white;
    display: inline-block;
    background: rgb(247 128 31);
    text-transform: uppercase;
    border: none;
    outline: none;
    margin 0 35%;
    padding: 0.7rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: all 0.3s;
    width: 15rem;
    
    cursor: pointer;
    &:hover{
        background: var(--main-grey);
    }
}
.Icon svg{
    vertical-align: bottom;
    margin-left:1.5rem;
}
`;