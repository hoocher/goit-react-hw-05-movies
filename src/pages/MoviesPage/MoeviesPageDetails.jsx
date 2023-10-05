import { fetchMovieDetails } from 'api/theMovieDbApi';
import MovieDetail from 'components/MovieDetails';
import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MoeviesPageDetails = () => {
  const { id } = useParams();

  const [movData, setMovData] = useState(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovData(data);
      } catch (error) {}
    };
    fetchDetails();
  });

  return (
    <>
      <>{movData ? <MovieDetail data={movData} /> : <p>Loading...</p>}</>
      <Outlet />
    </>
  );
};

export default MoeviesPageDetails;
