import axios from 'axios';

const signin = async (email, password) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/login`, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      },withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to login user');
  }
};

export { signin };