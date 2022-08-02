import React, {ReactNode} from 'react';
import {MovieResponseResult} from '../types/api.types';

export type MovieContextProps = {
  movies: MovieResponseResult[] | [];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  filteredMovies: () => MovieResponseResult[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type MovieStateProviderProps = {
  children: ReactNode;
};
