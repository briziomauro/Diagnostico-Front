import { useParams } from "react-router-dom";
import AddFunction from "../addFunction/AddFunction";
import DeleteFunction from "../deleteFunction/DeleteFunction";
import UpdateFunction from "../updateFunction/UpdateFunction";
import { useContext } from "react";
import { MovieContext } from "../Context/ContextProvider";

const MovieScreening = () => {
  const { id } = useParams();
  const { movies, functions } = useContext(MovieContext);

  const movie = movies.find((movie) => movie.id === parseInt(id));
  const movieFunctions = functions.filter(
    (func) => func.film.id === parseInt(id)
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  console.log(movie);

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="flex">
          <div className="w-[575px]">
            <section>
              <h1 className="text-4xl font-bold mb-4 uppercase">
                {movie.name}
              </h1>
              <p className="mb-4 font-light">{movie.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">FUNCIONES</h2>
              <ul className="space-y-3">
                {movieFunctions.map((func) => (
                  <li
                    key={func.id}
                    className="flex flex-col justify-between bg-zinc-800 p-4"
                  >
                    <div className="flex justify-between">
                      <span>
                        {formatDate(func.date)} - {func.time}
                      </span>
                      <span className="text-yellow-300">
                        ${func.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <UpdateFunction
                        functionId={func.id}
                        movieId={id}
                        initialDate={func.date}
                        initialTime={func.time}
                        initialPrice={func.price}
                      />
                      <DeleteFunction functionId={func.id} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <AddFunction movieId={id} />

            <div className="mt-8">
              <button className="bg-white hover:bg-zinc-300 text-black py-3 px-6 transition duration-300 ease-in-out">
                COMPRAR ENTRADAS
              </button>
            </div>
          </div>

          <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
            <img
              src={movie.imageUrl}
              alt={movie.name}
              className="w-[400px] h-[415px] object-fit"
            />
            <p className="text-base my-2">
              <strong>Titulo: </strong> {movie.name}
            </p>
            <p className="text-base mb-2">
              <strong>Origen: </strong> {movie.origin}
            </p>
            <p className="text-base">
              <strong>Director: </strong>
              {movie.director.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieScreening;
