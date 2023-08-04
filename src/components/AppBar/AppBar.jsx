import React from 'react';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000033' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffcc33' }}>
            Phonebook
          </Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
