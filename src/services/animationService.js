const API_BASE_URL = import.meta.env.VITE_BASE_URL

/**
 * Creates an animation from text input
 * @param {string} text - The text to animate
 * @returns {Promise<Object>} - Response with video URL
 */
export const createAnimation = async (text) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/create-animation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create animation');
    }

    return {
      success: true,
      videoUrl: `${API_BASE_URL}${data.videoUrl}`
    };
  } catch (error) {
    console.error('Animation service error:', error);
    throw error;
  }
};
