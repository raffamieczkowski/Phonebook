import React from 'react';
import { Helmet } from 'react-helmet';
import Login from '../LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Login />
    </div>
  );
};

export default LoginPage;
