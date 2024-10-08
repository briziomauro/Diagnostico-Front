import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-center text-2xl mb-4 mt-10">ALGUNOS ADELANTOS</h2>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <img src="https://static.voyalcine.net/Uploads/i3553.jpg" alt="Imagen de película" />
        <div className="w-[560px] h-[315px]">
          <lite-youtube videoid="V4ZDKt9KICo"></lite-youtube>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={() => navigate('/billboard')}
          className="bg-white w-[350px] p-3 rounded-[25px] my-10 cursor-pointer transition-all duration-250 ease-in-out text-black hover:font-medium hover:shadow-[0px_0px_16px_5px_rgba(255,_255,_255,_1)]"
        >
          MIRA TODA NUESTRA CARTELERA
        </button>
      </div>
    </div>
  );
}

export default MainPage;
