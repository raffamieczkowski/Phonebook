import React from 'react';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '16px',
  padding: '8px',
  transition: 'color 0.2s ease',
  marginRight: '20px',
};

const activeLinkStyles = {
  color: 'purple',
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink exact to="/" style={linkStyles} activeStyle={activeLinkStyles}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={linkStyles} activeStyle={activeLinkStyles}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
