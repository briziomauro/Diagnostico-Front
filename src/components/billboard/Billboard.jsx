import { useNavigate } from "react-router-dom";

const Billboard = () => {
  const navigate = useNavigate();

  // Modificar la función para aceptar solo el ID de la película
  const navigateToMovieScreening = (movieId) => {
    navigate(`/movie-screening/${movieId}`);
  };

  return (
    <div className="container m-10 p-4  flex">
      {Movies.map((movie)=>{
        <div key={movie.id} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        <div
          onClick={navigateToMovieScreening}
          className="text-white rounded-lg overflow-hidden shadow-md relative cursor-pointer "
        >
          <img
            src={movie.img}
            alt={movie.title}
            className="w-full object-cover"
          />
          <h3 className="text-lg font-semibold mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center">
            {movie.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
