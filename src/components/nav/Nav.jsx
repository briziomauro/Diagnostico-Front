import React from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate()

    const navigateMain = () => {
        navigate("/");
    }
    const navigateBillboard = () => {
        navigate("/billboard");
    }

    return (
        <div className='flex flex-col justify-between bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 h-fit'>
            <div className='flex justify-around w-full p-6'>
                <p className='text-5xl cursor-pointer' onClick={navigateMain}>CINE GRUPO 2</p>
                <p className='text-3xl text-center'>IMAX</p>
            </div>
            <div className='flex justify-evenly text-xl p-2'>
                <p className='cursor-pointer' onClick={navigateBillboard}>Cartelera</p>
                <p className='cursor-pointer' >Directores</p>
            </div>
        </div>
    )
}

export default Nav