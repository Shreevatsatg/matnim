const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) return null;
  
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Animation</h2>
      <video controls autoPlay className="max-w-full rounded-lg shadow-lg mx-auto">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
