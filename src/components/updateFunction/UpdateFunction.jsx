import React, { useContext, useState } from 'react'
import { MovieContext } from '../Context/ContextProvider';

const UpdateFunction = ({ functionId, movieId }) => {
    const [updateNot, setUpdateNot] = useState(false)
    const { setFunctions } = useContext(MovieContext);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const updateFunctionFetch = async (updated) => {
        try {
            const response = await fetch(`https://localhost:7228/api/MovieScreening/Update/${functionId}`, {
                method: 'PUT',
                body: JSON.stringify(updated),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response status:', response.status);
            console.log('Response:', response);

            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(`Update failed: ${errorMessage.message}`);
            }

            setFunctions((prevFunctions) =>
                prevFunctions.map((func) =>
                    func.id === functionId ? { ...func, ...updated } : func
                )
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleUpdateFunction = (e) => {
        e.preventDefault();
        const idFilm = parseInt(movieId, 10);
        const updatedFunction = {
            id: functionId,
            date: date,
            time: time,
            price: parseFloat(price),
            idFilm: idFilm,
        };
        updateFunctionFetch(updatedFunction);
    };
    return (
        <>
            <button
                onClick={() => setUpdateNot(!updateNot)}
                className="bg-zinc-900 hover:bg-zinc-950 text-white py-3 px-6 shadow-lg transition duration-300 ease-in-out mt-3"
            >
                EDITAR
            </button>

            {updateNot &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-zinc-900 text-white text-start p-6 w-[500px]">
                        <i onClick={() => setUpdateNot(!updateNot)} className="bi bi-arrow-left-short text-2xl cursor-pointer" />
                        <p className='text-xl p-2 text-center'>EDITAR FUNCIÓN: {functionId}</p>
                        <form onSubmit={handleUpdateFunction}>
                            <div className="mb-4">
                                <label className="block text-sm mb-2">Fecha</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full p-2 bg-zinc-800 text-white "
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="text-white block mb-2">Hora</label>
                                <input
                                    type="text"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-full p-2 bg-zinc-800 text-white "
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm mb-2">Precio</label>
                                <input
                                    type='text'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full p-2 bg-zinc-800 text-white "
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                className="w-full bg-zinc-900 hover:bg-zinc-950 text-white py-3 px-6 shadow-lg transition duration-300 ease-in-out mt-3"
                                onClick={() => setUpdateNot(!updateNot)}
                            >
                                EDITAR
                            </button>

                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default UpdateFunction