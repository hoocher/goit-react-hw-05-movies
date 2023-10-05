import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React from 'react';

const SearcBar = ({ onSubmit }) => {
  const submitSearch = e => {
    e.preventDefault();
    const newData = e.target[0].value;
    let pattern = /^[\s]+$/;
    if (!e.target[0].value || pattern.test(newData)) {
      return Notify.failure(`Search request can't be empty`);
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
