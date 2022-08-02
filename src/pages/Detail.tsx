import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {useParams} from 'react-router-dom';
import {getMovieById} from '../api/movie';

const Detail = () => {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/';
  const {movieId} = useParams();

  const {data, isLoading, isError} = useQuery(['movie', movieId], () =>
    getMovieById(movieId),
  );

  const Image = IMAGE_PATH + data?.backdrop_path;
  console.log(Image);

  if (isLoading) {
    return <h1 style={{color: 'white'}}>Loading</h1>;
  }

  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img
            alt=""
            className="locandina"
            src={IMAGE_PATH + data.poster_path}
          />
          <h1>{data.title}</h1>
          <h4>{data.release_date}</h4>
          <span className="minutes">{data.runtime} min</span>
          <p className="type">
            {data.genres[0].name},{data.genres[1]?.name},{data.genres[2]?.name}
          </p>
        </div>
        <div className="movie_desc">
          <p className="text">{data.overview}</p>
        </div>
      </div>
      <div
        className="blur_back"
        style={{
          background: `url(${Image})`,
          backgroundSize: 'fit',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
      ></div>
    </div>
  );
};

export default Detail;
