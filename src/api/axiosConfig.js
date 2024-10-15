import axios from 'axios';

// Use Vite's import.meta.env to get the API URL from the environment variable
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Vite's environment variable
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