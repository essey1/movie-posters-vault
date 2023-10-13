import React from 'react';

const MovieCard = ({ movie }) => {
    return(
    <div className="movie">
        <div className="movie__year">
            <p>{movie.Year}</p>
        </div>

        <div className="movie__poster">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
                
        <div className="movie__title">
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    );
}

export default MovieCard;