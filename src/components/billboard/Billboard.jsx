import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MovieContext } from "../Context/ContextProvider";

const Billboard = () => {
  const { movies } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="text-white rounded-lg overflow-hidden shadow-md relative cursor-pointer"
          >
            <img
              src={movie.imageUrl}
              alt={movie.name}
              className="w-full object-cover"
              onClick={() => handleNavigate(`/movie-screening/${movie.id}`)}
            />
            <h3 className="text-lg font-semibold mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center">
              {movie.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billboard;
