import { useParams } from "react-router-dom";
import { Movies, Functions } from "../data/Data";

const MovieScreening = () => {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.id === parseInt(id));
  const movieFunctions = Functions.filter(
    (func) => func.movieId === parseInt(id)
  );

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="flex">
        <div>
          <section>
            <h1 className="text-4xl font-bold mb-4 uppercase">{movie.title}</h1>
            <p className="mb-4 font-light">
              {movie.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">FUNCIONES</h2>
            <ul className="space-y-3">
              {movieFunctions.map((func) => (
                <li
                  key={func.id}
                  className="flex justify-between bg-zinc-800 p-4"
                >
                  <span>
                    {func.date} - {func.time}
                  </span>
                  <span className="text-yellow-300">
                    ${func.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8">
            <button className="bg-white hover:bg-zinc-300 text-black py-3 px-6 transition duration-300 ease-in-out">
              COMPRAR ENTRADAS
            </button>
          </div>

        </div>

        <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
          <img
            src={movie.img}
            alt={movie.title}
            className="w-[315px] h-[438px] object-fit"
          />
          <p className="text-base my-2">
            <strong>Titulo: </strong> {movie.title}
          </p>
          <p className="text-base mb-2">
            <strong>Origen: </strong> {movie.origen}
          </p>
          <p className="text-base">
            <strong>Director: </strong> {movie.director}
          </p>
        </div>

      </div>
    </div>
  );
};

export default MovieScreening;
