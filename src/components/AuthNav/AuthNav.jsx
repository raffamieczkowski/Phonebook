import React from 'react';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '16px',
  padding: '8px',
  transition: 'color 0.2s ease',
};

const activeLinkStyles = {
  color: 'purple',
};

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <NavLink
        to="/register"
        style={linkStyles}
        activeStyle={activeLinkStyles}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        style={linkStyles}
        activeStyle={activeLinkStyles}
      >
        Login
      </NavLink>
    </Stack>
  );
};
