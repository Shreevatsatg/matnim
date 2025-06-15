import React, { useState, useEffect } from 'react';
import { Play, Share2, Clock, Sparkles, ChevronLeft, ChevronRight, Heart, Eye, Download } from 'lucide-react';
import demoService from '../services/demoservice';


const GalleryPage = () => {
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalAnimations, setTotalAnimations] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    fetchAnimations(currentPage);
  }, [currentPage]);

  const fetchAnimations = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await demoService.getAllAnimations(page, 9);
      
      // Assuming your backend returns data in this format:
      // {
      //   animations: [...],
      //   currentPage: 1,
      //   totalPages: 5,
      //   totalCount: 45
      // }
      
      setAnimations(response.animations || response.data || response);
      setCurrentPage(response.currentPage || page);
      setTotalPages(response.totalPages || 1);
      setTotalAnimations(response.totalCount || response.total || 0);
      
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
        url: window.location.href + '/' + animation.id
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href + '/' + animation.id);
      alert('Link copied to clipboard!');
    }
  };

  const handlePlay = async (animation) => {
    try {
      // Update views when animation is played
      await demoService.updateViews(animation.id);
      
      // Update local state to reflect new view count
      setAnimations(prev => 
        prev.map(anim => 
          anim.id === animation.id 
            ? { ...anim, views: anim.views + 1 }
            : anim
        )
      );
      
      // Handle video playback logic here
      console.log('Playing animation:', animation.title);
      
    } catch (error) {
      console.error('Error updating views:', error);
    }
  };

  const handleLike = async (animation) => {
    try {
      await demoService.updateLikes(animation.id, 'increment');
      
      // Update local state to reflect new like count
      setAnimations(prev => 
        prev.map(anim => 
          anim.id === animation.id 
            ? { ...anim, likes: anim.likes + 1 }
            : anim
        )
      );
      
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
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
                onClick={() => fetchAnimations(currentPage)}
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
            
            {totalAnimations > 0 && (
              <p className="text-sm text-gray-400 mt-4">
                Showing {animations.length} of {totalAnimations} animations
              </p>
            )}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {animations.map((animation) => (
              <div 
                key={animation.id} 
                className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={animation.thumbnailUrl} 
                    alt={animation.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x240/3B82F6/FFFFFF?text=${animation.videoUrl}`;
                    }}
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
                      <button className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all transform hover:scale-110">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {animation.views?.toLocaleString() || 0}
                    </div>
                    <button 
                      onClick={() => handleLike(animation)}
                      className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white flex items-center hover:bg-red-500/30 transition-colors"
                    >
                      <Heart className="w-3 h-3 mr-1" />
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
          {totalPages > 1 && (
            <div className="flex justify-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-2 border border-white/10">
                <nav className="flex items-center space-x-2">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-105 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {/* Page numbers */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                    if (pageNum <= totalPages) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-4 py-3 rounded-xl font-medium transition-all ${
                            currentPage === pageNum
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                    return null;
                  })}
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="px-2 text-gray-500">...</span>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="px-4 py-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                  
                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-105 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;