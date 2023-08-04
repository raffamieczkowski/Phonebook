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
    <div style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', backgroundColor: '#000033', color: '#ffcc33' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack spacing={2} sx={{ width: '300px' }}>
            <TextField fullWidth label="Email" type="email" name="email" placeholder="example@example.com" style={{ backgroundColor: '#fff', borderRadius: '0' }} />
            <TextField fullWidth label="Password" type="password" name="password" placeholder="password" style={{ backgroundColor: '#fff', borderRadius: '0' }} />
            <div style={{ marginBottom: '10px' }}>
              <Button type="submit" variant="contained" color="primary" sx={{ width: '100%', backgroundColor: '#ffcc33', color: '#000033', borderRadius: '0' }}>
                Log in
              </Button>
            </div>
          </Stack>
        </div>
      </form>
    </div>
  );
};
