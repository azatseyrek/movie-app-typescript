import React from 'react';
import Card from '../components/Card';
import {useCtx} from '../context/MovieContext';

const CardLayout = () => {
  const {movies, filteredMovies} = useCtx();

  const filteredResult = filteredMovies();

  return (
    <div className="cardLayout">
      {filteredResult.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default CardLayout;
