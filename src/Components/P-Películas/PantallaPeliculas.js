import React from 'react'
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import requests from '../../Request';
import './PantallaPeliculas.css';
import Miniatura from './Miniatura/Miniatura';
import Modal from './Modals/Modal';



const Pantalla_Peliculas= function(){
    
    return(

        
            <div className='Pantalla_Peliculas'>
                <Navbar /> 
                <Banner />
                
                 <Modal>
                    <h3>Modal1</h3>
                    <p>Contenido modal 1</p>
                    <img src="https://placeimg.com/400/400/animals" alt="Animals" />
                </Modal>
                <Miniatura title="Trending Now" fetchUrl ={requests.fetchTrending} isLargeRow />
                <Miniatura title="Top rated" fetchUrl ={requests.fetchTopRated} />
                <Miniatura title="Action Movies" fetchUrl ={requests.fecthActionMovies}/>
                <Miniatura title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies}/>
                <Miniatura title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies}/>
                <Miniatura title="Romance Movies" fetchUrl ={requests.fetchRomanceMovies}/>
                <Miniatura title="Documentaries" fetchUrl ={requests.fetchDocumentaries}/>
                

                

            </div>
        
        

    );
}

export default Pantalla_Peliculas;