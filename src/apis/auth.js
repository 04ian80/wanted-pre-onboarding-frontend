import { authClient } from './axios';

export const signup = async (form) => {
  return await authClient.post('/auth/signup', {
    email: form.email,
    password: form.password,
  });
};

export const signin = async (form) => {
  return await authClient.post('/auth/signin', {
    email: form.email,
    password: form.password,
  });
};
