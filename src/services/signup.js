import axios from 'axios';

const signup = async (email, name, password) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user`, {
      email,
      name,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }, withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create user');
  }
};

export { signup };