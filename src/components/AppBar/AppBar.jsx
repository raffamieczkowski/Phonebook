import React from 'react';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
