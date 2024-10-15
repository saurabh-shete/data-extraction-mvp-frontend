import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Base URL for your API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (optional, for adding tokens, etc.)
axiosInstance.interceptors.request.use(
  (config) => {
    // For example, adding auth token to headers if it exists
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;