import React, { useContext, useState } from "react";
import { MovieContext } from "../Context/ContextProvider";
import { toast } from "react-toastify";

const DeleteFunction = ({ functionId }) => {
  const [deleteNot, setDeleteNot] = useState(false);
  const { functions, setFunctions } = useContext(MovieContext);

  // Buscar la función correspondiente al functionId
  const selectedFunction = functions.find((func) => func.id === functionId);
  let functionDate = selectedFunction ? selectedFunction.date : null;

  // Reformatear la fecha a día/mes/año
  if (functionDate) {
    const date = new Date(functionDate);
    const day = date.getDate().toString().padStart(2, "0"); 
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const year = date.getFullYear();
    functionDate = `${day}/${month}/${year}`; 
  }

  //fetch al endpoint delete
  const deleteFunction = async (functionId) => {
    try {
      const response = await fetch(
        `https://localhost:7228/api/MovieScreening/Delete/${functionId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Delete failed");
      }
      setFunctions((prevFunctions) =>
        prevFunctions.filter((func) => func.id !== functionId)
      );
      toast.success("Función eliminada con éxito");
    } catch (error) {
      toast.error("Error al eliminar la función.");
      throw new Error(error.message || "Delete failed");
    }
  };

  return (
    <>
      <button
        onClick={() => setDeleteNot(!deleteNot)}
        className="bg-zinc-900 hover:bg-zinc-950 text-white py-3 px-6 shadow-lg transition duration-300 ease-in-out mt-3"
      >
        ELIMINAR
      </button>
      {deleteNot && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-zinc-900 text-white text-center p-6">
            <h1 className="text-3xl mb-6">ELIMINAR FUNCION</h1>
            <p className="mb-6">
              ¿Estás seguro que deseas eliminar la función del día
              <strong>
                {functionDate ? ` ${functionDate}` : " [Fecha no disponible]"}
              </strong>
              ?
            </p>
            <div className="flex justify-evenly">
              <button
                onClick={() => deleteFunction(functionId)}
                className="bg-zinc-700 text-white hover:bg-zinc-400 py-3 px-6 shadow-lg transition-all duration-300 ease-in-out"
              >
                CONFIRMAR
              </button>
              <button
                onClick={() => setDeleteNot(!deleteNot)}
                className="bg-zinc-700 text-white hover:bg-zinc-400 py-3 px-6 shadow-lg transition duration-300 ease-in-out"
              >
                NO, VOLVER
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteFunction;
