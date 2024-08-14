import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movies } from "../data/Data";

const AddMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [funcion, setFuncion] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [origen, setOrigen] = useState("");

  const handleAdd = () => {
    const newMovie = {
      id: Movies.length + 1,
      title,
      img,
      funcion,
      description,
      director,
      origen,
    };

    Movies.push(newMovie);
    navigate("/billboard");
  };

  const navBack = () => {
    navigate('/billboard');
  };


  return (
    <div className="w-[500px] mx-auto my-10 p-6 bg-zinc-900 bg-opacity-55 text-white">
      <i onClick={navBack} className="bi bi-arrow-left-short text-2xl cursor-pointer" />
      <h1 className="flex justify-center text-4xl mb-6">NUEVA PELICULA</h1>

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
        <label className="text-white block mb-1">URL de la Imagen:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="w-full p-2  bg-zinc-800"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">
          {" "}
          Funciones disponibles:
        </label>
        <input
          type="text"
          value={funcion}
          onChange={(e) => setFuncion(e.target.value)}
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

      <div className="mb-4">
        <label className="block text-sm mb-1">Origen</label>
        <input
          type="text"
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
          className="w-full p-2 bg-zinc-800 text-white"
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-6 shadow-lg transition duration-300 ease-in-out"
      >
        AÑADIR
      </button>
    </div>
  );
};

export default AddMovie;
