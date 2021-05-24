import React, { useEffect, useState }  from 'react'
import axios from '../../../Axios/Axios';
import './Rows.css';

function Rows({title, fetchUrl, isLarge = false}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    }, [fetchUrl])

    console.log(movies)

    return (
        <div id="row" className="row">
            <h2>{title}</h2>

            <div className="row-posters">
                {movies.map(
                    (movie) => 
                        ((isLarge && movie.poster_path) ||
                        (!isLarge && movie.backdrop_path)) && (
                            <img 
                                key={movie.id}
                                className="row-poster" 
                                src={!isLarge ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` 
                                : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                                alt={movie.title}                     
                            />
                        ))}
            </div>
            

        </div>
    )
}

export default Rows
