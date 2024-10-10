import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (username, email, password, confirmPassword) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name: username,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
};
  
export const logout = () => {
    localStorage.removeItem('token');
};