import React, { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext();

const ContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [functions, setFunctions] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const fetchMovies = async () => {
        try {
            // Check localStorage first
            const storedMovies = localStorage.getItem('movies');
            if (storedMovies) {
                setMovies(JSON.parse(storedMovies));
            } else {
                const response = await fetch('https://localhost:7228/api/MovieScreening/Getfilms');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const moviesData = await response.json();
                setMovies(moviesData);
                localStorage.setItem('movies', JSON.stringify(moviesData));
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setError(error);
        } finally {
            setLoading(false); 
        }
    };

    const fetchFunctions = async () => {
        try {
            const response = await fetch('https://localhost:7228/api/MovieScreening/Get');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const functionsData = await response.json();
            setFunctions(functionsData);
        } catch (error) {
            console.error('Error fetching functions:', error);
            setError(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([fetchMovies(), fetchFunctions()]);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Mostrar indicador de carga
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Mostrar mensaje de error
    }

    return (
        <MovieContext.Provider value={{ movies, functions, setFunctions, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

export default ContextProvider;
