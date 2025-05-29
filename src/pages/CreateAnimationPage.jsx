import { useState } from 'react';
import TextForm from '../components/TextForm';
import VideoPlayer from '../components/VideoPlayer';
import { createAnimation } from '../services/animationService';

const CreateAnimationPage = () => {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [prompt, setPrompt] = useState('');

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

  return (
    <div className="w-full h-full text-center">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Create Animation</h1>
        <p className="text-gray-300 mb-6">
          Describe the animation you want to create using natural language
        </p>
        
        <TextForm onSubmit={handleSubmit} isLoading={loading} />

        {error && (
          <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-md text-red-300">
            <p className="font-medium">Error</p>
            <p>{error}</p>
          </div>
        )}

        {loading && (
          <div className="mt-6 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500"></div>
            <span className="ml-3 text-gray-400">Creating your animation...</span>
          </div>
        )}
      </div>

      {videoUrl && (
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <VideoPlayer videoUrl={videoUrl} />
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Your Prompt</h3>
            <p className="text-gray-300 italic">"{prompt}"</p>
          </div>
          
          <div className="mt-6 flex justify-center space-x-4">
            <a 
              href={videoUrl} 
              download
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors"
            >
              Download Video
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.origin + videoUrl);
                alert('Video URL copied to clipboard!');
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAnimationPage;
