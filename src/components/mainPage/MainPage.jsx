import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

  const navigate = useNavigate();

  const navigateToBillboard = () => {
    navigate('/billboard');
  };

  return (
    <div className='flex flex-col justify-center'>
      <p className='text-center text-2xl mb-4 mt-10'>ALGUNOS ADELANTOS</p>

      {/* ACA VA UN SLIDER */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <img src="https://static.voyalcine.net/Uploads/i3553.jpg" alt="Imagen de película" />
        <div className="flex items-center">
          <iframe
            className='w-[560px] h-[315px]'
            src="https://www.youtube.com/embed/V4ZDKt9KICo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>

      <div className='flex justify-center items-center mt-5'>
        <button onClick={navigateToBillboard} className='bg-white w-[350px] p-3 rounded-[25px] my-10 cursor-pointer transition-all duration-250 ease-in-out text-black hover:font-medium hover:shadow-[0px_0px_16px_5px_rgba(255,_255,_255,_1)]'>MIRA TODA NUESTRA CARTELERA</button>
      </div>

    </div>
  )
}

export default MainPage;
