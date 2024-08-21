import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../Context/ContextProvider';

const AddFunction = ({ movieId }) => {
    const { movies, functions, setFunctions } = useContext(MovieContext);

    const [menu, setMenu] = useState(false)
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const movie = movies.find((movie) => movie.id === movieId);


    const handleMenu = () => {
        setMenu(!menu)
    }
    console.log(movie)


    const addNewFunction = async (newFunction) => {
        try {
            const response = await fetch('https://localhost:7228/api/MovieScreening/Add', {
                method: 'POST',
                body: JSON.stringify(newFunction),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const contentType = response.headers.get('Content-Type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text(); // Lee la respuesta como texto
                throw new Error(`${text}`);
            }
            const newFunctionData = await response.json();
            setFunctions((prevFunctions) => [newFunctionData, ...prevFunctions]);
            return newFunctionData;
        } catch (error) {
            alert(`${error.message}`);
        }
    };

    const handleAddFunction = (e) => {
        e.preventDefault();
        const idFilm = parseInt(movieId, 10);
        const newFunction = {
            date,
            time,
            price: parseFloat(price),
            idFilm: idFilm,
        };
        addNewFunction(newFunction);
    };



    console.log(functions)

    return (
        <>
            <div
                onClick={handleMenu}
                className="flex items-center justify-center bg-zinc-800 bg-opacity-40 text-white hover:bg-opacity-80 transition-all duration-300 cursor-pointer mt-5 p-2"
            >
                <i className="bi bi-plus-lg text-xl" />
            </div>

            {menu &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-zinc-900 text-white text-start p-6 w-[500px]">
                        <i onClick={handleMenu} className="bi bi-arrow-left-short text-2xl cursor-pointer" />
                        <p className='text-xl p-2 text-center'>NUEVA FUNCIÓN: </p>
                        <form onSubmit={handleAddFunction}>
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
                                    type='number'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full p-2 bg-zinc-800 text-white "
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-6 shadow-lg transition duration-300 ease-in-out mt-3"
                            >
                                AÑADIR
                            </button>

                        </form>
                    </div>
                </div>
            }
        </>


    )
}

export default AddFunction