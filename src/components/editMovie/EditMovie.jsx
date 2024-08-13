import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Movies } from "../data/Data";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = Movies.find((movie) => movie.id === parseInt(id));

  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [director, setDirector] = useState(movie.director);
  const [origen, setOrigen] = useState(movie.origen);

  const handleSave = () => {
    // Actualizar la película en la base de datos o estado
    movie.title = title;
    movie.description = description;
    movie.director = director;
    movie.origen = origen;
    navigate("/billboard");

    if (!movie) {
      return <div>Película no encontrada</div>;
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Editar Película</h1>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Director</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2">Origen</label>
        <input
          type="text"
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        Guardar Cambios
      </button>
    </div>
  );
};

export default EditMovie;
