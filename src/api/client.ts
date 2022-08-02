import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    external_source: 'imdb_id',
    language: 'en-US',
  },
});

export default client;
