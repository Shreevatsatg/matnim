import React from 'react';
import { Sparkles, Brain, Code, Video, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/6 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">About Matnim</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our mission to make mathematical animations accessible through AI and advanced technology
          </p>
        </div>

        {/* Mission and How It Works Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 mb-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Our Mission</h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Matnim aims to make mathematical animations accessible to everyone. By combining the power of 
            Manim (Mathematical Animation Engine) with AI, we enable users to create beautiful, educational 
            animations using simple natural language descriptions.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="group bg-gray-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <div className="text-indigo-400 text-xl font-bold mb-2">1</div>
              <h3 className="text-lg font-medium mb-2">Describe Your Animation</h3>
              <p className="text-gray-400">
                Enter a natural language description of the mathematical concept or animation you want to visualize.
              </p>
            </div>
            
            <div className="group bg-gray-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <div className="text-indigo-400 text-xl font-bold mb-2">2</div>
              <h3 className="text-lg font-medium mb-2">AI Generates Manim Code</h3>
              <p className="text-gray-400">
                Our AI system translates your description into Python code using the Manim library.
              </p>
            </div>
            
            <div className="group bg-gray-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <div className="text-indigo-400 text-xl font-bold mb-2">3</div>
              <h3 className="text-lg font-medium mb-2">Render & Share</h3>
              <p className="text-gray-400">
                The code is executed to create a high-quality animation that you can download or share.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Technologies Used</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 mb-6">
            <li className="flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              <span><span className="font-medium">Manim</span> - Mathematical Animation Engine created by 3Blue1Brown</span>
            </li>
            <li className="flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              <span><span className="font-medium">React</span> - Frontend UI library for building the web interface</span>
            </li>
            <li className="flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              <span><span className="font-medium">Node.js</span> - Backend server for handling animation requests</span>
            </li>
            <li className="flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              <span><span className="font-medium">Gemini API</span> - AI model for translating natural language to Manim code</span>
            </li>
            <li className="flex items-center">
              <Zap className="w-5 h-5 text-blue-400 mr-2" />
              <span><span className="font-medium">Tailwind CSS</span> - Utility-first CSS framework for styling</span>
            </li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">The Team</h2>
          <div className="grid grid-cols-1  gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4 flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform">
                SH
              </div>
              <h3 className="text-xl font-medium">Shreevatsa</h3>
              <p className="text-gray-300">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;