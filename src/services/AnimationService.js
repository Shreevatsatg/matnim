import axios from 'axios';

const createAnimation = async (prompt) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/animation`, {
      prompt: prompt,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create animation');
  }
};

export { createAnimation };

//make sure backend API at YOUR_BACKEND_ENDPOINT returns a response with a videoUrl