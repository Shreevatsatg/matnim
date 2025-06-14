import React, { useState, useEffect } from 'react';
import { Play, Share2, Clock, Sparkles, ChevronLeft, ChevronRight, Heart, Eye, Download } from 'lucide-react';

const GalleryPage = () => {
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Enhanced demo data with more realistic content
  const demoAnimations = [
    { 
      id: 1, 
      title: 'Circle to Square Transformation',
      description: 'A smooth animation showing a circle morphing into a square using continuous deformation',
      thumbnailUrl: 'https://via.placeholder.com/400x240/3B82F6/FFFFFF?text=Circle+→+Square',
      videoUrl: '#',
      views: 2847,
      likes: 145,
      createdAt: '2 days ago',
      author: 'MathVisualizer'
    },
    { 
      id: 2, 
      title: 'Sine Wave Function',
      description: 'Visualization of a sine wave with animated graph plotting and phase transformations',
      thumbnailUrl: 'https://via.placeholder.com/400x240/6366F1/FFFFFF?text=sin(x)+Wave',
      videoUrl: '#',
      views: 5123,
      likes: 287,
      createdAt: '1 week ago',
      author: 'CalcuGenius'
    },
    { 
      id: 3, 
      title: 'Pythagorean Theorem',
      description: 'Visual proof of the Pythagorean theorem using animated squares and geometric transformations',
      thumbnailUrl: 'https://via.placeholder.com/400x240/8B5CF6/FFFFFF?text=a²+b²=c²',
      videoUrl: '#',
      views: 8934,
      likes: 512,
      createdAt: '3 days ago',
      author: 'GeometryPro'
    },
    { 
      id: 4, 
      title: 'Fibonacci Sequence',
      description: 'Animation showing the growth of the Fibonacci sequence with golden ratio spiral',
      thumbnailUrl: 'https://via.placeholder.com/400x240/06B6D4/FFFFFF?text=Fibonacci+Spiral',
      videoUrl: '#',
      views: 3456,
      likes: 198,
      createdAt: '5 days ago',
      author: 'NumberTheory'
    },
    { 
      id: 5, 
      title: 'Vector Addition',
      description: 'Demonstration of vector addition with animated arrows and parallelogram law',
      thumbnailUrl: 'https://via.placeholder.com/400x240/10B981/FFFFFF?text=Vector+Math',
      videoUrl: '#',
      views: 4721,
      likes: 234,
      createdAt: '1 week ago',
      author: 'VectorViz'
    },
    { 
      id: 6, 
      title: 'Rotating 3D Cube',
      description: 'A 3D cube rotating in space with perspective projection and wireframe transitions',
      thumbnailUrl: 'https://via.placeholder.com/400x240/F59E0B/FFFFFF?text=3D+Cube',
      videoUrl: '#',
      views: 6789,
      likes: 345,
      createdAt: '4 days ago',
      author: '3DMathArt'
    },
    { 
      id: 7, 
      title: 'Derivative Visualization',
      description: 'Interactive visualization of derivatives showing tangent lines and rate of change',
      thumbnailUrl: 'https://via.placeholder.com/400x240/EF4444/FFFFFF?text=f\'(x)+Demo',
      videoUrl: '#',
      views: 7234,
      likes: 412,
      createdAt: '6 days ago',
      author: 'DerivativeDeep'
    },
    { 
      id: 8, 
      title: 'Complex Numbers',
      description: 'Journey through the complex plane with Euler\'s formula and exponential functions',
      thumbnailUrl: 'https://via.placeholder.com/400x240/8B5CF6/FFFFFF?text=e^(iπ)+1=0',
      videoUrl: '#',
      views: 5567,
      likes: 298,
      createdAt: '1 week ago',
      author: 'ComplexMath'
    },
    { 
      id: 9, 
      title: 'Matrix Transformations',
      description: 'Linear transformations in 2D space showing rotation, scaling, and shearing',
      thumbnailUrl: 'https://via.placeholder.com/400x240/06B6D4/FFFFFF?text=Matrix+Transform',
      videoUrl: '#',
      views: 4123,
      likes: 189,
      createdAt: '3 days ago',
      author: 'LinearAlgebra'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Simulate API call with a timeout
    const fetchAnimations = async () => {
      try {
        setTimeout(() => {
          setAnimations(demoAnimations);
          setLoading(false);
        }, 1500);
      } catch (err) {
        setError('Failed to load animations');
        setLoading(false);
        console.error('Error fetching animations:', err);
      }
    };

    fetchAnimations();
  }, []);

  const handleShare = (animation) => {
    if (navigator.share) {
      navigator.share({
        title: animation.title,
        text: animation.description,
        url: window.location.href + '/' + animation.id
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href + '/' + animation.id);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/6 rounded-full blur-2xl animate-bounce" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 flex justify-center items-center h-screen">
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 border-4 border-blue-500/30 rounded-full animate-spin border-t-blue-500 mx-auto"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-pulse border-t-indigo-500 mx-auto"></div>
            </div>
            <p className="text-xl text-gray-300">Loading amazing animations...</p>
            <p className="text-gray-400 text-sm mt-2">Discovering mathematical artistry</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-400/6 rounded-full blur-2xl animate-bounce" />
        </div>
        
        <div className="relative z-10 flex justify-center items-center h-screen">
          <div className="text-center p-8">
            <div className="bg-red-500/10 backdrop-blur-lg border border-red-500/30 rounded-xl p-8 text-red-300 max-w-md mx-auto">
              <p className="text-xl font-medium mb-2">Oops! Something went wrong</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 12,
            top: mousePosition.y / 12,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/6 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">Community Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                ANIMATION
              </span>
              <span className="block text-white">GALLERY</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover stunning mathematical visualizations created by our community. 
              From elegant proofs to complex 3D transformations, explore the artistry of mathematics.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {animations.map((animation) => (
              <div 
                key={animation.id} 
                className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
                onMouseEnter={() => setHoveredCard(animation.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={animation.thumbnailUrl} 
                    alt={animation.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <button className="p-3 bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-110">
                          <Play className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleShare(animation)}
                          className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all transform hover:scale-110"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                      <button className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all transform hover:scale-110">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {animation.views.toLocaleString()}
                    </div>
                    <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {animation.likes}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {animation.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {animation.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {animation.createdAt}
                    </div>
                    <div className="text-xs text-blue-400 font-medium">
                      by {animation.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
              <nav className="flex items-center space-x-2">
                <button className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-105 flex items-center">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium">
                  1
                </button>
                <button className="px-4 py-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                  2
                </button>
                <button className="px-4 py-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                  12
                </button>
                <button className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-105 flex items-center">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;