import React, { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext();

const ContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [functions, setFunctions] = useState([]);

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
                // Save to localStorage
                localStorage.setItem('movies', JSON.stringify(moviesData));
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

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
        }
    };

    useEffect(() => {
        fetchFunctions();
    }, []);

    return (
        <MovieContext.Provider value={{ movies, functions, setFunctions, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

export default ContextProvider;
