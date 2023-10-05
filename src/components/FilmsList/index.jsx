import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {films.map(({ title, id }) => (
          <li key={id}>
            <Link
              to={`/movies/${id.toString()}`}
              state={{ from: location.pathname + location.search }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilmsList;
