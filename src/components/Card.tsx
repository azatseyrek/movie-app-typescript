import {Link, useNavigate} from 'react-router-dom';
import {MovieResponseResult} from '../types/api.types';
// import Button from '../UI/Button';

type CardProps = {
  movie: MovieResponseResult;
};

const Card: React.FC<CardProps> = ({movie}) => {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/';
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/${movie.id}`);
  };

  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="card-front">
          <figure>
            <div className="img-bg"></div>
            <img
              className="card-image"
              src={IMAGE_PATH + movie.backdrop_path}
              alt={movie.poster_path}
            />
            <figcaption>{movie.title}</figcaption>
          </figure>

          <ul>
            <li>IMDB : {movie.vote_average}</li>
          </ul>
        </div>

        <div className="card-back">
          <figure>
            <div className="img-bg"></div>

            <img
              className="card-image"
              src={IMAGE_PATH + movie.poster_path}
              alt="Brohm Lake"
            />
          </figure>
          <button className="btn" onClick={onClickHandler}>
            More Detail
          </button>
          <div className="design-container">
            <span className="design design--1"></span>
            <span className="design design--2"></span>
            <span className="design design--3"></span>
            <span className="design design--4"></span>
            <span className="design design--5"></span>
            <span className="design design--6"></span>
            <span className="design design--7"></span>
            <span className="design design--8"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
