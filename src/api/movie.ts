import {MovieResponseResult} from './../types/api.types';

import client from './client';

const getAllMovies = async (): Promise<any> =>
  await client
    .get(
      '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
    )
    .then((res) => res.data.results);

const GetMovieById = async (id: number): Promise<any> => {
  await client.get('/movie/{movie_id}').then((res) => res.data.results);
};
const movieApi = {
  getAllMovies,
  GetMovieById,
};

export default movieApi;
