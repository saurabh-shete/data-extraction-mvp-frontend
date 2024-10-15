import axiosInstance from './axiosConfig';

export const loginUser = async (username, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      username,
      password,
    });
    return response.data; // Return the access token and other data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

// Similarly, you can add other auth-related API functions like `registerUser` etc.