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
      id: Movies.length + 1, // Asigna un nuevo ID
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

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Añadir Nueva Película</h1>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="text-white block mb-1">URL de la Imagen:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="w-full p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          {" "}
          Funciones disponibles:
        </label>
        <input
          type="text"
          value={funcion}
          onChange={(e) => setFuncion(e.target.value)}
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
        onClick={handleAdd}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        Añadir Película
      </button>
    </div>
  );
};

export default AddMovie;
