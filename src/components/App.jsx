import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MoeviesPageDetails = lazy(() =>
  import('pages/MoviesPage/MoeviesPageDetails')
);
const Review = lazy(() => import('./Review'));
const Cast = lazy(() => import('./Cast'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoeviesPageDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
