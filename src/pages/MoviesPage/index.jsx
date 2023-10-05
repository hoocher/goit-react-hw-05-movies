import { fetchMovie } from 'api/theMovieDbApi';
import FilmsList from 'components/FilmsList';
import SearcBar from 'components/SearhBar';
import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const MoviesPages = () => {
  const [films, setFilms] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (searchQuery || query) {
      if (searchQuery !== query) {
        setSearchQuery(query);
      }
      const fetchSearchQuerry = async () => {
        try {
          const data = await fetchMovie(query);

          setFilms(data);
        } catch (error) {}
      };
      fetchSearchQuerry();
    }
  }, [searchQuery, query]);

  const onSubmit = newData => {
    setSearchParams({ query: newData });
    setSearchQuery(newData);
  };

  return (
    <>
      <SearcBar onSubmit={onSubmit} value={query} />
      {films && <FilmsList films={films} />}
      <Outlet />
    </>
  );
};

export default MoviesPages;
