import React from 'react'
import { useParams } from 'react-router-dom';
import { Movies } from '../data/Data';

const MovieScreening = () => {
  const { id } = useParams();
  const moviescreen = Movies.find (movie => movie.id == id)
  return (
    <div>{moviescreen.title}</div>

  )
}

export default MovieScreening