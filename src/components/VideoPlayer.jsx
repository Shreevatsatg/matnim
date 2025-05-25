import Card from './ui/Card';

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) return null;
  
  return (
    <Card className="mt-8" title="Your Animation">
      <div className="flex justify-center">
        <video 
          controls 
          autoPlay 
          className="max-w-full rounded-lg shadow-lg mx-auto w-full max-h-[70vh]">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Card>
  );
};

export default VideoPlayer;
