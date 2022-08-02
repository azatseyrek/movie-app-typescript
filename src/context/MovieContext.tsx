import {useQuery} from '@tanstack/react-query';
import {createContext, useContext, useState} from 'react';
import {getAllMovies} from '../api/movie';
// import movieApi from '../api/movie';
import {MovieResponseResult} from '../types/api.types';
import {MovieContextProps, MovieStateProviderProps} from './context.types';

const MovieContext = createContext<MovieContextProps>({} as MovieContextProps);

export const useCtx = () => useContext(MovieContext);

export const MovieContextProvider: React.FC<MovieStateProviderProps> = ({
  children,
}) => {
  const [movies, setMovies] = useState<MovieResponseResult[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {isLoading, isError} = useQuery<MovieResponseResult[]>(
    ['allMovies'],
    () => {
      return getAllMovies();
    },
    {
      onSuccess: (data) => {
        setMovies(data);
      },
      onError: (error) => {
        setErrorMessage("Couldn't load movies");
      },
    },
  );

  const filteredMovies = () => {
    if (searchQuery === '') {
      return movies;
    }
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };
  return (
    <MovieContext.Provider
      value={{
        movies,
        isLoading,
        errorMessage,
        isError,
        filteredMovies,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
