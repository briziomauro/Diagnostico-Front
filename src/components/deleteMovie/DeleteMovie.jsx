import { useParams } from "react-router-dom";
import { Movies } from "../data/Data";
import { useNavigate } from "react-router-dom";

const DeleteMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = Movies.find((movie) => movie.id === parseInt(id));

  const handleDelete = () => {
    const index = Movies.indexOf(movie);
    if (index > -1) {
      Movies.splice(index, 1);
    }
    navigate("/billboard");
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Eliminar Película</h1>
      <p className="mb-6">
        ¿Estás seguro que deseas eliminar la película{" "}
        <strong>{movie.title}</strong>?
      </p>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        Eliminar
      </button>
    </div>
  );
};

export default DeleteMovie;
