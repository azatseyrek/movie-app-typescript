import React from 'react';
import Card from '../components/Card';
import {useCtx} from '../context/MovieContext';

const CardLayout = () => {
  const {movies} = useCtx();

  return (
    <div className="cardLayout">
      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </div>
  );
};

export default CardLayout;
