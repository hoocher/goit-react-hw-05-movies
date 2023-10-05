import { fetchMovieReviews } from 'api/theMovieDbApi';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { id } = useParams('id');
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (id) {
      const fetchReview = async () => {
        try {
          setIsLoading(true);
          const data = await fetchMovieReviews(id);
          setReviewData(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchReview();
    }
  }, [id]);

  return (
    <ul>
      {isLoading && 'is Loading...'}
      {error && error}
      {reviewData &&
        reviewData.map(({ author, content, id }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Review;
