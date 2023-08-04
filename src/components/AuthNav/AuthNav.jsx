import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        to="/register"
      >
        Rejestracja
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        to="/login"
      >
        Zaloguj się
      </NavLink>
    </div>
  );
};
