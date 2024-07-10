// src/features/auth/authService.js
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const login = async (credentials) => {
  const response = await axios.post(`${apiUrl}/login/`, credentials);
  return response.data;
};

const register = async (userData) => {
  const response = await axios.post(`${apiUrl}/signup/`, userData);
  return response.data;
};

const verifyToken = async (token) => {
  const response = await axios.post(
    `${apiUrl}/token/verify/`,
    { token: token }, // Pass the token in the body
    {
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header
      },
    }
  );
  return response.data;
};

const authService = {
  login,
  register,
  verifyToken, // Add verifyToken to the authService object
};

export default authService;
