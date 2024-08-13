import { useNavigate } from "react-router-dom";
import { Movies } from "../data/Data";

const Billboard = () => {
  const navigate = useNavigate();

  const navigateToMovieScreening = (movieId) => {
    navigate(`/movie-screening/${movieId}`);
  };

  const navigateToEditMovie = (movieId) => {
    navigate(`/admin/edit-movie/${movieId}`);
  };

  const navigateToDeleteMovie = (movieId) => {
    navigate(`/admin/delete-movie/${movieId}`);
  };

  const navigateToAddMovie = () => {
    navigate(`/admin/add-movie`);
  };

  return (
    <div className="container m-10 p-4 ">
      <button
        onClick={navigateToAddMovie}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Añadir Nueva Película
      </button>

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
              onClick={() => navigateToMovieScreening(movie.id)}
            />
            <h3 className="text-lg font-semibold mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center">
              {movie.title}
            </h3>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => navigateToEditMovie(movie.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-2 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => navigateToDeleteMovie(movie.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billboard;
