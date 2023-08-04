import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack spacing={2} sx={{ width: '300px' }}>
            <TextField fullWidth label="Email" type="email" name="email" placeholder="example@example.com" />
            <TextField fullWidth label="Password" type="password" name="password" placeholder="password" />
            <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
              Log in
            </Button>
          </Stack>
        </div>
      </form>
    </div>
  );
};
