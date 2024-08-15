import React, { useState } from 'react'
import { Functions, Movies } from '../data/Data'

const AddFunction = ({ movieId }) => {
    const [menu, setMenu] = useState(false)
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const movie = Movies.find((movie) => movie.id === movieId);

    const handleMenu = () => {
        setMenu(!menu)
    }

    const handleAddFunction = () => {
        const newFunction = {
            id: Functions.length + 1,
            date,
            time,
            price,
            movieId: movieId,
            director: movie.director,
        };

        Functions.push(newFunction);
    };

    //SIMULACION DE NUEVA FUNCION, ACA VA FETCH A LA API

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
                        <p className='text-xl p-2 text-center'>NUEVA FUNCIÓN: {movie.title}</p>
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
                                    type="time"
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