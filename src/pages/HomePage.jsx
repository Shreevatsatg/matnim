import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Zap, Brain, Code, Video, ArrowRight, Github, Twitter, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const examples = [
    "Create a 3D visualization of calculus derivatives",
    "Generate animated linear algebra transformations", 
    "Build interactive physics simulations",
    "Animate complex mathematical proofs"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Generation",
      description: "Describe your mathematical concept in plain English and watch AI create stunning visualizations"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "No Code Required",
      description: "Generate complex Manim animations without writing a single line of Python code"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Export Ready",
      description: "Download high-quality MP4 videos perfect for education, presentations, or social media"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Advanced AI models generate animations in seconds, not hours of manual coding"
    }
  ];

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

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm">Powered by Advanced AI Models</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="block text-white  ">
              MATNIM 
            </span>
            <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-500 bg-clip-text text-transparent text-5xl">ANIMATIONS POWERED BY AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform complex mathematical concepts into stunning, professional-grade animations. 
            Enterprise-level AI technology that delivers broadcast-quality results in seconds.
          </p>

          {/* Animated typing effect */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 mb-10 max-w-2xl mx-auto border border-white/10">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400">AI Prompt</span>
            </div>
            <div className="text-left">
              <span className="text-blue-400">$</span>
              <span className="text-indigo-400 ml-2 font-mono">
                {examples[currentExample]}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center">
              <Play className="w-6 h-6 mr-3" />
              Start Creating Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-lg rounded-xl font-bold text-xl hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">ManimAI Pro</span>?
            </h2>
            <p className="text-xl text-gray-300">Enterprise-grade mathematical visualization through cutting-edge artificial intelligence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-lg rounded-3xl p-16 border border-white/10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              READY TO TRANSFORM YOUR 
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                MATHEMATICAL STORYTELLING?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals, educators, and researchers who trust our enterprise-grade AI 
              to deliver stunning mathematical visualizations that captivate and educate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
                Start Free Trial
              </button>
              <button className="px-10 py-5 bg-white/5 backdrop-blur-lg rounded-xl font-bold text-xl hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/20">
                <Github className="w-6 h-6 mr-3" />
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;