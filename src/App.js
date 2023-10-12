import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./style.css";
 
const API_URL = 'https://www.omdbapi.com?apikey=85ca9730';



const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    searchMovies("The Godfather");
  }, []);

  const searchMovies = async (title) => {
    setIsLoading(true);

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    setIsLoading(false);
  };

  return (
    <div className='app'>
      <h1>Movie Posters Vault</h1>

      <div className='search'>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              searchMovies(searchTerm);
            }
          }}
          placeholder="Search for movies and shows"
        />

        <img
           src="img/search.svg"
           alt='search'
           onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        isLoading ? (
          <>
            <br /><br />
            <img src="img/loading.svg" alt="Loading" />
          </>
        ) :
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={ movie } />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }

      
    </div>
  );
};

export default App;