import { useState, useEffect } from 'react';

// This is a placeholder component for the gallery
// In a real implementation, you would fetch the animations from your backend
const GalleryPage = () => {
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder data for demo purposes
  const demoAnimations = [
    { 
      id: 1, 
      title: 'Circle to Square Transformation',
      description: 'A smooth animation showing a circle morphing into a square',
      thumbnailUrl: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Animation+1',
      videoUrl: '#'
    },
    { 
      id: 2, 
      title: 'Sine Wave Function',
      description: 'Visualization of a sine wave with animated graph plotting',
      thumbnailUrl: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Animation+2',
      videoUrl: '#'
    },
    { 
      id: 3, 
      title: 'Pythagorean Theorem',
      description: 'Visual proof of the Pythagorean theorem using animated squares',
      thumbnailUrl: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Animation+3',
      videoUrl: '#'
    },
    { 
      id: 4, 
      title: 'Fibonacci Sequence',
      description: 'Animation showing the growth of the Fibonacci sequence',
      thumbnailUrl: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Animation+4',
      videoUrl: '#'
    },
    { 
      id: 5, 
      title: 'Vector Addition',
      description: 'Demonstration of vector addition with animated arrows',
      thumbnailUrl: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Animation+5',
      videoUrl: '#'
    },
    { 
      id: 6, 
      title: 'Rotating 3D Cube',
      description: 'A 3D cube rotating in space with perspective projection',
      thumbnailUrl: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Animation+6',
      videoUrl: '#'
    }
  ];

  useEffect(() => {
    // Simulate API call with a timeout
    const fetchAnimations = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch('/api/animations');
        // const data = await response.json();
        
        // Using demo data for now
        setTimeout(() => {
          setAnimations(demoAnimations);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load animations');
        setLoading(false);
        console.error('Error fetching animations:', err);
      }
    };

    fetchAnimations();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="bg-red-900/50 border border-red-700 rounded-md p-4 text-red-300 max-w-md mx-auto">
          <p className="font-medium">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Animation Gallery</h1>
        <p className="text-gray-300">
          Browse animations created by the Visualixir community
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animations.map((animation) => (
          <div key={animation.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-105">
            <div className="relative">
              <img 
                src={animation.thumbnailUrl} 
                alt={animation.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                  Play Animation
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{animation.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{animation.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Created 2 days ago</span>
                <button className="text-indigo-400 hover:text-indigo-300 text-sm">
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="flex justify-center mt-10">
        <nav className="flex items-center">
          <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 mr-2">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md bg-indigo-600 text-white mr-2">1</button>
          <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 mr-2">2</button>
          <button className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default GalleryPage;
