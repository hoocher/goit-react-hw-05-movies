import { fetchMovieCast } from 'api/theMovieDbApi';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams('id');
  const [castData, setCastData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCast = async () => {
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
    if (id) {
      fetchCast();
    }
  }, [id]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ul>
      {isLoading && 'Loading...'}
      {error && error}
      {castData &&
        castData.map(({ name, character, id, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
