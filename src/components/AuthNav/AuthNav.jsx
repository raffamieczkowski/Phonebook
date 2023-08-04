import React from 'react';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        to="/register"
        color="inherit"
        variant="body1"
      >
        Rejestracja
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        to="/login"
        color="inherit"
        variant="body1"
      >
        Zaloguj się
      </NavLink>
    </Stack>
  );
};
