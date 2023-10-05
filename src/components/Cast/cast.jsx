import { fetchMovieCast } from 'api/theMovieDbApi';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams('id');
  const [castData, setCastData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      const fetchReview = async () => {
        try {
          setIsLoading(true);
          const data = await fetchMovieCast(id);
          setCastData(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchReview();
    }
  }, [id]);
  console.log('castData', castData);

  return (
    <>
      <ul>
        {isLoading && 'Loading...'}
        {error && error}
      </ul>
    </>
  );
};
