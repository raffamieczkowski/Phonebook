import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const userMenuStyles = {
  display: 'flex',
  alignItems: 'center',
};

const welcomeStyles = {
  fontWeight: 'bold',
  fontSize: '18px',
};

const logoutButtonStyles = {
  marginLeft: '10px',
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div style={userMenuStyles}>
      <p style={welcomeStyles}>
        Welcome <span>{user.name}</span>
      </p>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          style={logoutButtonStyles}
        >
          Logout
        </Button>
      </Stack>
    </div>
  );
};
