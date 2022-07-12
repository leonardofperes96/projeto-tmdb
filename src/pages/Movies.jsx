import React from 'react'
import {useState,useEffect} from 'react'
import MovieCard from '../components/MovieCard';
import '../components/MovieCard.css'

const apiKey = import.meta.env.VITE_API_KEY;
const movieUrl = import.meta.env.VITE_API

const Movies = () => {
  const [movies,setMovies] = useState([])
  const getMovieUrl = async (url)=>{
    const response = await fetch(url)
    const json = await response.json();
    setMovies(json.results)
  }
  useEffect(()=>{
    const getUrl = `${movieUrl}top_rated?${apiKey}`
    getMovieUrl(getUrl)
  }, [])

  return (
    <div>
      <h2 className="main-info">Melhores Filmes</h2>
      <div className="container">
      {movies && movies.map((movie)=> <MovieCard key={movie.id}movie={movie}/>)}
      </div>
      </div>
  )
}

export default Movies