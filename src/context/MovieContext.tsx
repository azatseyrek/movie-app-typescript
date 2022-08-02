import {useQuery} from '@tanstack/react-query';
import {createContext, useContext, useState} from 'react';
import movieApi from '../api/movie';
import {MovieResponseResult} from '../types/api.types';
import {MovieContextProps, MovieStateProviderProps} from './context.types';

const MovieContext = createContext<MovieContextProps>({} as MovieContextProps);

export const useCtx = () => useContext(MovieContext);

export const MovieContextProvider: React.FC<MovieStateProviderProps> = ({
  children,
}) => {
  const [movies, setMovies] = useState<MovieResponseResult[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const {isLoading, isError} = useQuery<MovieResponseResult[]>(
    ['allMovies'],
    () => {
      return movieApi.getAllMovies();
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
  return (
    <MovieContext.Provider value={{movies, isLoading, errorMessage, isError}}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;

// const filteredPokemons = useMemo(() => {
//     if (searchQuery === '') {
//       return pokemons.data?.results;
//     }
//     return pokemons.data?.results.filter((pokemon) => {
//       return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
//     });
//   }, [pokemons, searchQuery]);
