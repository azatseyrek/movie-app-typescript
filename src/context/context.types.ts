import {ReactNode} from 'react';
import {MovieResponseResult} from '../types/api.types';

export type MovieContextProps = {
  movies: MovieResponseResult[] | [];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
};

export type MovieStateProviderProps = {
  children: ReactNode;
};
