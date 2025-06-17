import React, { useState, useEffect } from 'react';
import { Play, Share2, Clock, Heart } from 'lucide-react';
import { demoService } from '../services/demoservice';
import axios from 'axios';

const GalleryPage = () => {
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    fetchAnimations();
  }, []);

  const fetchAnimations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await demoService();
      setAnimations(data);
      
    } catch (err) {
      setError(err.message || 'Failed to load animations');
      console.error('Error fetching animations:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (animation) => {
    if (navigator.share) {
      navigator.share({
        title: animation.title,
        text: animation.description,
        url: window.location.href + '/' + animation._id
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href + '/' + animation._id);
      alert('Link copied to clipboard!');
    }
  };

  const handlePlay = (animation) => {
    setPlayingVideo(animation);
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  const handleLike = async (animation) => {
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/demo-videos/${animation._id}/like`);
      
      // Update local state to reflect new like count
      setAnimations(prev => 
        prev.map(anim => 
          anim._id === animation._id 
            ? { ...anim, likes: anim.likes + 1 }
            : anim
        )
      );
      
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
            <p className="text-gray-400 text-sm mt-2">Fetching from backend...</p>
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
              <p className="text-sm mb-4">{error}</p>
              <button 
                onClick={fetchAnimations}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
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

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <video 
              src={playingVideo.videoUrl} 
              controls 
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">{playingVideo.title}</h3>
              <p className="text-gray-300 mt-2">{playingVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mt-10 mb-16">
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
            
            {animations.length > 0 && (
              <p className="text-sm text-gray-400 mt-4">
                Showing {animations.length} animations
              </p>
            )}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animations.map((animation) => (
              <div 
                key={animation._id} 
                className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
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
                        <button 
                          onClick={() => handlePlay(animation)}
                          className="p-3 bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-110"
                        >
                          <Play className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleShare(animation)}
                          className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all transform hover:scale-110"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Like button overlay */}
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => handleLike(animation)}
                      className="px-3 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white flex items-center hover:bg-red-500/50 transition-colors"
                    >
                      <Heart className="w-4 h-4 mr-1" />
                      {animation.likes || 0}
                    </button>
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
                      {formatDate(animation.createdAt)}
                    </div>
                    <div className="text-xs text-blue-400 font-medium">
                      by {animation.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {animations.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No animations found</p>
              <p className="text-gray-500 text-sm mt-2">Check back later for new content!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;