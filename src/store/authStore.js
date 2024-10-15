import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axiosInstance from '../api/axiosConfig'; // Reuse axios config
import { decodeToken } from '../utils/jwtDecode';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      errorMessage: '',
      login: async (username, password) => {
        try {
          const response = await axiosInstance.post('/auth/login', {
            username,
            password,
          });

          const token = response.data.result.access_token;
          set({ token, errorMessage: '' });

          // Extract user ID from token and fetch user data
          const decoded = decodeToken(token);
          const userId = decoded.sub; // Assuming 'sub' is the user ID in the token

          const userResponse = await axiosInstance.get(`/users/${userId}`);
          set({ user: userResponse.data.result });

          return true;
        } catch (error) {
          set({
            errorMessage: error.response?.data?.detail || 'Login failed',
          });
          return false;
        }
      },
      logout: () => set({ token: null, user: null }),

      // New function to clear the error message
      setErrorMessage: (message) => set({ errorMessage: message }),
    }),
    {
      name: 'auth-storage', // Persist in localStorage with this key
    }
  )
);

export { useAuthStore };