import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div>
      <p>
        Welcome <span>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
