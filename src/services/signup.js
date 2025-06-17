import axios from 'axios';

const signup = async (email, name, password) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/user`,
      { email, name, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      // Email already exists
      return { error: "This email is already registered. Please use another email." };
    } else {
      return { error: "Failed to create user. Please try again." };
    }
  }
};

export { signup };
