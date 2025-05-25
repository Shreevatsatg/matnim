import { useState } from 'react';

const TextForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 justify-center mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to animate..."
        disabled={isLoading}
        className="py-2 px-4 rounded-md border border-gray-600 bg-gray-800 text-white w-2/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button 
        type="submit" 
        disabled={isLoading || !text.trim()}
        className={`py-2 px-6 rounded-md font-medium ${isLoading || !text.trim() ? 'bg-gray-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
      >
        {isLoading ? 'Creating...' : 'Create Animation'}
      </button>
    </form>
  );
};

export default TextForm;
