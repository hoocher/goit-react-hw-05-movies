import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieDetail = ({ data }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    data;

  const location = useLocation();

  const theBigDay = new Date(release_date);
  const date = theBigDay.getFullYear();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <Link to={location.state || '/'}>Go back</Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <h3>
          {title} ({date})
        </h3>
        <span>User Score: {vote_average * 10}%</span>
        <h4>Overview</h4>
        <span>{overview}</span>
        <h5>Genres</h5>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Additional information:</p>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="review" state={location.state}>
              Review
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetail;
