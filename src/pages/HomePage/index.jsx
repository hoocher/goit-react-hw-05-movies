import { fetchTrendMovie } from 'api/theMovieDbApi';
import FilmsList from 'components/FilmsList';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await fetchTrendMovie();
        setTrendList(data);
      } catch (error) {}
    };
    fetchList();
  }, []);

  return (
    <>
      {trendList && (
        <>
          <h2>Trending today</h2>
          <FilmsList films={trendList} />
        </>
      )}
    </>
  );
};

export default HomePage;
