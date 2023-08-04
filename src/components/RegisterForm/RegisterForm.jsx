import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="name"
            placeholder="John Brown"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
          />
        </label>
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
