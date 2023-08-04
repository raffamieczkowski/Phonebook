import React from 'react';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">Contacts</NavLink>
      )}
    </nav>
  );
};
