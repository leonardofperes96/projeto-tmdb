import React from 'react'
import './MovieCard.css'
const movieImage = import.meta.env.VITE_IMG
import { FaStar } from "react-icons/fa";
const MovieCard = ({movie}) => {
  return (
    <div className="movie-container">
    <img className="imgs" src={movieImage + movie.poster_path}></img>
    <span><FaStar className="span-icon"/>{movie.vote_average}</span>
    <h1>{movie.title}</h1>
    <button>Detalhes</button>
    </div>
  )
}

export default MovieCard