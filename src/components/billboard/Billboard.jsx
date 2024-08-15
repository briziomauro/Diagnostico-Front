import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Movies } from "../data/Data";
import 'bootstrap-icons/font/bootstrap-icons.css';
import DeleteMovie from "../deleteMovie/DeleteMovie";

const Billboard = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleDeleteMovie = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const closeDeleteMovie = () => {
    setSelectedMovieId(null);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Movies.map((movie) => (
          <div
            key={movie.id}
            className="text-white rounded-lg overflow-hidden shadow-md relative cursor-pointer"
          >
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full object-cover"
              onClick={() => handleNavigate(`/movie-screening/${movie.id}`)}
            />
            <h3 className="text-lg font-semibold mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center">
              {movie.title}
            </h3>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => handleNavigate(`/admin/edit-movie/${movie.id}`)}
                className="bg-white hover:bg-zinc-300 text-black py-1 px-2 text-sm"
              >
                EDITAR
              </button>
              <button
                onClick={() => handleDeleteMovie(movie.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 text-sm"
              >
                ELIMINAR
              </button>
            </div>
          </div>
        ))}
        <div
          onClick={() => handleNavigate(`/admin/add-movie`)}
          className="flex items-center justify-center bg-zinc-800 bg-opacity-40 text-white hover:bg-opacity-80 transition-all duration-300 h-[411px] w-[288px] cursor-pointer"
        >
          <i className="bi bi-plus-lg text-5xl" />
        </div>
      </div>
      {selectedMovieId && <DeleteMovie movieId={selectedMovieId} onClose={closeDeleteMovie} />}
    </div>
  );
};

export default Billboard;
