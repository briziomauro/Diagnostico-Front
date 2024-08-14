import { Movies } from "../data/Data";
import { useNavigate } from "react-router-dom";

const DeleteMovie = ({ movieId, onClose }) => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const movie = Movies.find((movie) => movie.id === movieId);
  //const movie = Movies.find((movie) => movie.id === parseInt(id));

  const handleDelete = () => {
    const index = Movies.indexOf(movie);
    if (index > -1) {
      Movies.splice(index, 1);
    }
    navigate("/billboard");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-zinc-900 text-white text-center p-6">
        <h1 className="text-3xl mb-6">ELIMINAR PELICULA</h1>
        <p className="mb-6">
          ¿Estás seguro que deseas eliminar la película{" "}
          <strong>{movie.title}</strong>?
        </p>
        <div className="flex justify-evenly">
          <button
            onClick={handleDelete}
            className="bg-zinc-700 text-white hover:bg-zinc-400 py-3 px-6 shadow-lg transition-all duration-300 ease-in-out"
          >
            CONFIRMAR
          </button>
          <button
            onClick={onClose}
            className="bg-zinc-700 text-white hover:bg-zinc-400 py-3 px-6 shadow-lg transition duration-300 ease-in-out"
          >
            NO, VOLVER
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
