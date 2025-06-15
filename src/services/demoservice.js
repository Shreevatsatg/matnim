// demoService.js
class DemoService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_SERVER_URL 
  }

  // Fetch all animations from backend
  async getAllAnimations(page = 1, limit = 9) {
    try {
      const response = await fetch(`${this.baseUrl}/api/demo-videos?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any authentication headers if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching animations:', error);
      throw error;
    }
  }

  // Fetch single animation by ID
  async getAnimationById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/animations/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching animation:', error);
      throw error;
    }
  }

  // Update animation views
  async updateViews(id) {
    try {
      const response = await fetch(`${this.baseUrl}/animations/${id}/views`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating views:', error);
      throw error;
    }
  }

  // Update animation likes
  async updateLikes(id, action = 'increment') {
    try {
      const response = await fetch(`${this.baseUrl}/animations/${id}/likes`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating likes:', error);
      throw error;
    }
  }

  // Search animations
  async searchAnimations(query, page = 1, limit = 9) {
    try {
      const response = await fetch(`${this.baseUrl}/animations/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching animations:', error);
      throw error;
    }
  }

  // Get animations by author
  async getAnimationsByAuthor(author, page = 1, limit = 9) {
    try {
      const response = await fetch(`${this.baseUrl}/animations/author/${encodeURIComponent(author)}?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching animations by author:', error);
      throw error;
    }
  }
}

// Create and export a singleton instance
const demoService = new DemoService();
export default demoService;