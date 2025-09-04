import Slider from "react-slick";
import { Paper } from "@mui/material";
import { PlayCircle } from "lucide-react"; 
import { Link, useNavigate } from "react-router-dom";

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  const handleReviews = (movieId) => {
    navigate(`/Reviews/${movieId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="movie-carousel-container">
      <Slider {...settings}>
        {movies?.map((movie) => (
          <Paper key={movie.imdbId}>
            <div className="movie-card-container">
              <div
                className="movie-card"
                style={{ "--img": `url(${movie.backdrops[0]})` }}
              >
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster} alt="" />
                  </div>
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>
                  <div className="movie-buttons-container">
                    <Link
                      to={`/Trailer/${movie.trailerLink.substring(
                        movie.trailerLink.length - 11
                      )}`}
                    >
                      <div className="play-button-icon-container">
                        <PlayCircle
                          size={48}
                          strokeWidth={1.5}
                          className="text-blue-500 hover:text-blue-700 transition"
                        />
                      </div>
                    </Link>

                    <div className="movie-review-button-container">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        onClick={() => handleReviews(movie.imdbId)}
                      >
                        Reviews
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
