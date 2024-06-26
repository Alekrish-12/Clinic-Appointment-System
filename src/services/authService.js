// src/services/authService.js

const BASE_URL = 'http://localhost:4000/users';

export const login = async (email, password) => {
  try {
    const response = await fetch(BASE_URL);
    const users = await response.json();
    const user = users.find(user => user.email === email && user.password === password);
    return user ? user : null;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};

export const signup = async (userData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...userData, password: 'Change@123' })
    });
    return response.ok;
  } catch (error) {
    console.error('Error during signup:', error);
    return false;
  }
};
