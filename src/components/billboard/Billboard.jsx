import { useNavigate } from "react-router-dom";

const Billboard = () => {
  const navigate = useNavigate();

  const navigateToMovieScreening = () => {
    navigate(`/movie-screening`);
  };

  return (
    <div className="container m-10 p-4  flex">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        <div
          onClick={navigateToMovieScreening}
          className="text-white rounded-lg overflow-hidden shadow-md relative cursor-pointer "
        >
          <img
            src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
            alt="Ad Astra"
            className="w-full object-cover"
          />
          <h3 className="text-lg font-semibold mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center">
            Ad Astra
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
