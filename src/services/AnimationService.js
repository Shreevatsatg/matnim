import axios from 'axios';

const createAnimation = async (prompt) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/animation`,
      { prompt },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // <- This should be here
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to create animation');
  }
};

export { createAnimation };
