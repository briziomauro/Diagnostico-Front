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
    <div className="w-[900px] mx-auto my-10 p-6 bg-zinc-900 bg-opacity-55 text-white rounded-lg shadow-lg">
      <i onClick={navBack} className="bi bi-arrow-left-short text-2xl cursor-pointer" />
      <h1 className="flex justify-center text-4xl mb-6">NUEVA PELICULA</h1>

      <div className="flex justify-between">
        <div className="w-[60%]">
          <div className="mb-4">
            <label className="block text-sm mb-1">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-zinc-800 text-white "
            />
          </div>

          <div className="mb-4">
            <label className="text-white block mb-1">URL de la Imagen:</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="w-full p-2 bg-zinc-800 text-white "
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Funciones disponibles:</label>
            <input
              type="text"
              value={funcion}
              onChange={(e) => setFuncion(e.target.value)}
              className="w-full p-2 bg-zinc-800 text-white "
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 bg-zinc-800 text-white "
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Director</label>
            <input
              type="text"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              className="w-full p-2 bg-zinc-800 text-white "
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Origen</label>
            <input
              type="text"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              className="w-full p-2 bg-zinc-800 text-white "
            />
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-6 shadow-lg transition duration-300 ease-in-out"
          >
            AÑADIR
          </button>
        </div>

        <div className="w-[35%] flex flex-col items-center relative">
          <label className="text-white block mb-1">Previsualización:</label>
          <div className="relative w-[310px] h-[450px]">
            <img
              src={img}
              alt="Previsualización"
              className="w-full h-full object-fit shadow-md"
              onError={(e) => e.target.src = 'https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg'}
            />
            <h3 className="text-lg font-semibold mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center text-white">
              {title ? title : "TITULO"}
            </h3>
          </div>
        </div>

      </div>
    </div>

  );
};

export default AddMovie;
