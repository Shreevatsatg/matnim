import { useState } from 'react';
import TextForm from './components/TextForm';
import VideoPlayer from './components/VideoPlayer';
import { createAnimation } from './services/animationService';

function App() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (text) => {
    setLoading(true);
    setError('');
    setVideoUrl('');

    try {
      const result = await createAnimation(text);
      setVideoUrl(result.videoUrl);
    } catch (err) {
      setError(err.message);
      console.error('Error creating animation:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Manim Text Animator</h1>
      <p className="text-gray-300 mb-6">Enter text to create an animated video</p>
      
      <TextForm onSubmit={handleSubmit} isLoading={loading} />

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {loading && <div className="text-gray-400 italic mb-8">Creating your animation...</div>}

      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
}

export default App;
