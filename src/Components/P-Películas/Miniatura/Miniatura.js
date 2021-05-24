import React, { useEffect, useState }  from 'react'
import axios from '../../../../src/Axios/Axios';
import './Miniatura.css';

function Miniatura({ title, fetchUrl, isLargeRow= false }) {
    const [movies, setMovies] =useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        
            <div className="row">
                <h2>{title}</h2>

                {movies.map(movie => (
                    <img 
                    
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path

                    }`} alt={movie.name} />
                ))}
            </div>
        
    )
}

export default Miniatura


