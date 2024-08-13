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
    movie.title = title;
    movie.description = description;
    movie.director = director;
    movie.origen = origen;
    navigate("/billboard");

    if (!movie) {
      return <div>Película no encontrada</div>;
    }
  };

  const navBack = () => {
    navigate('/billboard');
  };


  return (
    <div className="w-[700px] mx-auto mt-10 p-6 bg-zinc-900 bg-opacity-55 text-white">
      <i onClick={navBack} className="bi bi-arrow-left-short text-2xl cursor-pointer" />
      <h1 className="flex justify-center text-4xl mb-6">EDITAR PELICULA</h1>

      <div className="mb-4">
        <label className="block text-sm mb-1">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-zinc-800 text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-zinc-800 text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Director</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className="w-full p-2 bg-zinc-800 text-white"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-1">Origen</label>
        <input
          type="text"
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
          className="w-full p-2 bg-zinc-800 text-white"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-6 shadow-lg transition duration-300 ease-in-out"
      >
        GUARDAR
      </button>
    </div>
  );
};

export default EditMovie;
