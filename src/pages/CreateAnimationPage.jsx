import React, { useState, useEffect } from 'react';
import { Sparkles, Download, Link2, AlertCircle, Loader2, Play, Wand2 } from 'lucide-react';

// Mock components - replace with your actual components
const TextForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe your mathematical animation... e.g., 'Create a 3D visualization showing the derivative of x² with animated tangent lines'"
          className="w-full h-32 px-6 py-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
          disabled={isLoading}
        />
        <div className="absolute bottom-4 right-4">
          <Wand2 className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading || !text.trim()}
        className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-3 animate-spin" />
            Creating Animation...
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-3" />
            Generate Animation
          </>
        )}
      </button>
    </form>
  );
};

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="relative bg-black/50 rounded-xl overflow-hidden border border-white/10">
      <video
        src={videoUrl}
        controls
        className="w-full h-auto"
        style={{ maxHeight: '500px' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Mock service - replace with your actual service
const createAnimation = async (text) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 3000));
  return {
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
  };
};

const CreateAnimationPage = () => {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [prompt, setPrompt] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (text) => {
    setLoading(true);
    setError('');
    setVideoUrl('');
    setPrompt(text);

    try {
      const result = await createAnimation(text);
      setVideoUrl(result.videoUrl);
    } catch (err) {
      setError(err.message || 'Failed to create animation');
      console.error('Error creating animation:', err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + videoUrl);
      // You could add a toast notification here
      alert('Video URL copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/6 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">AI Animation Generator</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                CREATE
              </span>
              <span className="block text-white">YOUR ANIMATION</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Describe the mathematical animation you want to create using natural language. 
              Our AI will transform your ideas into stunning visual content.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/10 hover:border-blue-500/30 transition-all">
            <TextForm onSubmit={handleSubmit} isLoading={loading} />
            
            {error && (
              <div className="mt-6 p-4 bg-red-500/10 backdrop-blur-lg border border-red-500/30 rounded-xl text-red-300 animate-pulse">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Error</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="mt-8 flex flex-col items-center justify-center py-8">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full animate-spin border-t-blue-500"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-indigo-500"></div>
                </div>
                <p className="mt-4 text-gray-300 text-lg">Creating your animation...</p>
                <p className="text-gray-400 text-sm">This may take a few moments</p>
              </div>
            )}
          </div>

          {/* Video Results Section */}
          {videoUrl && (
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Animation Ready!
                </h2>
                <p className="text-gray-300">Your mathematical visualization has been generated</p>
              </div>

              <VideoPlayer videoUrl={videoUrl} />
              
              {/* Prompt Display */}
              <div className="mt-8 p-6 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Wand2 className="w-5 h-5 mr-2 text-blue-400" />
                  Your Prompt
                </h3>
                <p className="text-gray-300 italic leading-relaxed">"{prompt}"</p>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={videoUrl}
                  download
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Video
                </a>
                <button
                  onClick={copyToClipboard}
                  className="px-8 py-4 bg-white/5 backdrop-blur-lg rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
                >
                  <Link2 className="w-5 h-5 mr-3" />
                  Copy Link
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAnimationPage;