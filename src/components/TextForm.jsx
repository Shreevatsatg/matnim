import { useState } from 'react';
import Button from './ui/Button';

const TextForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 justify-center mb-8 w-full max-w-2xl mx-auto">
      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe the animation you want to create..."
          disabled={isLoading}
          rows={3}
          className="w-full py-2 px-4 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
        <p className="text-xs text-gray-400 mt-1">Try: "Create a circle that transforms into a square" or "Show the Pythagorean theorem visually"</p>
      </div>
      <div className="flex items-end">
        <Button 
          type="submit" 
          disabled={isLoading || !text.trim()}
          variant="primary"
          size="lg"
          className="whitespace-nowrap"
        >
          {isLoading ? 'Creating...' : 'Generate Animation'}
        </Button>
      </div>
    </form>
  );
};

export default TextForm;
