import { fetchMovie } from 'api/theMovieDbApi';
import FilmsList from 'components/FilmsList';
import SearcBar from 'components/SearhBar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPages = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const fetchSearchQuerry = async () => {
        try {
          const data = await fetchMovie(query);

          setFilms(data);
        } catch (error) {}
      };
      fetchSearchQuerry();
    }
  }, [searchParams, query]);

  const onSubmit = newData => {
    setSearchParams({ query: newData });
  };

  return (
    <>
      <SearcBar onSubmit={onSubmit} value={query} />
      {films && <FilmsList films={films} />}
    </>
  );
};

export default MoviesPages;
