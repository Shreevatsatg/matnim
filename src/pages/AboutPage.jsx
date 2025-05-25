const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">About Visualixir</h1>
        <p className="text-gray-300">
          Learn more about our project and how it works
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-6">
          Visualixir aims to make mathematical animations accessible to everyone. By combining the power of 
          Manim (Mathematical Animation Engine) with AI, we enable users to create beautiful, educational 
          animations using simple natural language descriptions.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="text-indigo-400 text-xl font-bold mb-2">1</div>
            <h3 className="text-lg font-medium mb-2">Describe Your Animation</h3>
            <p className="text-gray-400">
              Enter a natural language description of the mathematical concept or animation you want to visualize.
            </p>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="text-indigo-400 text-xl font-bold mb-2">2</div>
            <h3 className="text-lg font-medium mb-2">AI Generates Manim Code</h3>
            <p className="text-gray-400">
              Our AI system translates your description into Python code using the Manim library.
            </p>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="text-indigo-400 text-xl font-bold mb-2">3</div>
            <h3 className="text-lg font-medium mb-2">Render & Share</h3>
            <p className="text-gray-400">
              The code is executed to create a high-quality animation that you can download or share.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><span className="font-medium">Manim</span> - Mathematical Animation Engine created by 3Blue1Brown</li>
          <li><span className="font-medium">React</span> - Frontend UI library for building the web interface</li>
          <li><span className="font-medium">Node.js</span> - Backend server for handling animation requests</li>
          <li><span className="font-medium">Gemini API</span> - AI model for translating natural language to Manim code</li>
          <li><span className="font-medium">Tailwind CSS</span> - Utility-first CSS framework for styling</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Open Source</h2>
        <p className="text-gray-300">
          Visualixir is an open-source project. We welcome contributions from developers, 
          mathematicians, educators, and anyone interested in making mathematics more accessible and visual.
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-indigo-400">JS</span>
            </div>
            <h3 className="text-lg font-medium">Jane Smith</h3>
            <p className="text-gray-400">Lead Developer</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-indigo-400">JD</span>
            </div>
            <h3 className="text-lg font-medium">John Doe</h3>
            <p className="text-gray-400">Math Consultant</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-indigo-400">AR</span>
            </div>
            <h3 className="text-lg font-medium">Alice Roe</h3>
            <p className="text-gray-400">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
