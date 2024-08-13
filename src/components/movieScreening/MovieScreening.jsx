import { useParams } from "react-router-dom";
import { Movies, Functions } from "../data/Data";

const MovieScreening = () => {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.id === parseInt(id));
  const movieFunctions = Functions.filter(
    (func) => func.movieId === parseInt(id)
  );

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-base mb-4">
            <strong>Descripción:</strong> {movie.description}
          </p>
          <p className="text-base mb-4">
            <strong>Director:</strong> {movie.director}
          </p>
          <p className="text-base mb-8">
            <strong>Origen:</strong> {movie.origen}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Funciones Disponibles</h2>
          <ul className="space-y-3">
            {movieFunctions.map((func) => (
              <li
                key={func.id}
                className="flex justify-between bg-gray-800 p-4 rounded-md shadow-md"
              >
                <span>
                  {func.date} - {func.time}
                </span>
                <span className="text-yellow-400 font-semibold">
                  ${func.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
          <img
            src={movie.img}
            alt={movie.title}
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
          Comprar Entradas
        </button>
      </div>
    </div>
  );
};

export default MovieScreening;
