import { AppBarComponent } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};