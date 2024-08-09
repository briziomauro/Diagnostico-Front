import React from 'react'
import { useParams } from 'react-router-dom';
import { Movies } from '../data/Data';
import { Functions } from '../data/Data';

const MovieScreening = () => {
  const { id } = useParams();
  const moviescreen = Movies.find(movie => movie.id == id)
  const moviesFunctions = Functions.find(functionM => functionM.movieId == id)
  return (
    <div className='flex justify-center'>
      <section>
        <h2 className='text-6xl '>
          {moviescreen.title}
        </h2>
        <div>
          <p>Cine2 - Rosario</p>
          <div>
            <h3>{moviesFunctions.date}</h3>
            <p>{moviesFunctions.time}</p>
            <p>{moviesFunctions.price}</p>
          </div>
          <p>{moviescreen.description}</p>
        </div>
      </section>
      <section>
        <img
          className='w-[340px] h-[470px]'
          src={moviescreen.img} alt="InceptionImg" />
        <p>Titulo: {moviescreen.title}</p>
        <p>Origen: {moviescreen.origen}</p>
        <p>Director: {moviescreen.director}</p>
      </section>
    </div>

  )
}

export default MovieScreening