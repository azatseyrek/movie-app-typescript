// import {MovieResponseResult} from './../types/api.types';

import {MovieResponseResult} from '../types/api.types';
import client from './client';

export const getAllMovies = async (): Promise<MovieResponseResult[]> =>
  await client
    .get(
      '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
    )
    .then((res) => res.data.results);

export const getMovieById = async (id: string | undefined): Promise<any> => {
  return await client.get(`movie/${id}`).then((res) => res.data);
};

// const getMovieById = async (id: any): Promise<any> => {
//   return await client.get(`movie/${id}`).then((res) => res.data);
// };
