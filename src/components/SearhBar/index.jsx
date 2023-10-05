import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React from 'react';

const SearcBar = ({ onSubmit, value }) => {
  const submitSearch = e => {
    e.preventDefault();
    const newData = e.target[0].value;
    let pattern = /^[\s]+$/;
    if (!e.target[0].value || pattern.test(newData)) {
      return Notify.failure(
        'Please type serching tag or delete spase from begining'
      );
    }
    onSubmit(newData);
  };

  return (
    <>
      <form action="#" onSubmit={submitSearch}>
        <input type="text" autoComplete="off" autoFocus required />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearcBar;
