import React from 'react'
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import requests from '../../Request';
import './PantallaPeliculas.css';
import Miniatura from './Miniatura/Miniatura';




const Pantalla_Peliculas= function(){
   
    return(

        
            <div className='Pantalla_Peliculas'>
                <Navbar /> 
                <Banner />
                
                 
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