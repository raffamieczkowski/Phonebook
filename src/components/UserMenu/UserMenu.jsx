import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const user = useSelector((state) => state.contacts.user);

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
