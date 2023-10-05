import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavUnlisted } from './index.styled';

const Header = () => {
  return (
    <header>
      <nav>
        <NavUnlisted>
          <NavLink to="/">
            <li>Home Page</li>
          </NavLink>
          <NavLink to="/movies">
            <li>Movies</li>
          </NavLink>
        </NavUnlisted>
      </nav>
    </header>
  );
};

export default Header;
