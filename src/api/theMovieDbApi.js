import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const params = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzkzMWUxNjJlMmYxYWVlZWExZGRhM2ZkOTIxYzNkMCIsInN1YiI6IjY1MTk2Y2NkOTNiZDY5MDBmZTQ5Njc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yS_yo-BqfJ5oziE5xJNNFU80-hZoawlgW1T2F_Xi1Wk',
  },
};

export const fetchTrendMovie = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const { data } = await axios.get(url, params);
  return data.results;
};

export const fetchMovie = async searchQuerry => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuerry}&include_adult=false&language=en-US&page=1`;
  const { data } = await axios.get(url, params);
  if (data.results.length === 0) {
    return Notify.failure('There is no results');
  }
  return data.results;
};

export const fetchMovieDetails = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const { data } = await axios.get(url, params);
  return data;
};

export const fetchMovieReviews = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const { data } = await axios.get(url, params);
  if (data.results.length === 0) {
    return Notify.failure('There is no results');
  }
  return data.results;
};

export const fetchMovieCast = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const { data } = await axios.get(url, params);
  if (data.cast.length === 0) {
    return Notify.failure('There is no results');
  }
  return data.cast;
};
