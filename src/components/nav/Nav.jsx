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
        <div className='flex flex-col justify-between h-fit'>
            <div className='flex justify-around w-full p-6 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500'>
                <p className='text-5xl cursor-pointer' onClick={navigateMain}>CINE GRUPO 2</p>
                <img src="/svg/logo-imax.svg" className='w-32 h-10 mt-2'/>
            </div>
            <div className='flex justify-evenly text-xl p-3 bg-white bg-opacity-5'>
                <p className="cursor-pointer text-zinc-300 hover:text-white transition-all duration-200" onClick={navigateBillboard}>CARTELERA</p>
            </div>
        </div>
    )
}

export default Nav