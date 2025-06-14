import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X, Play } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl shadow-blue-500/10' 
        : 'bg-gray-900/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-indigo-300 transition-all duration-300">
                Matnim
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/create"
              className="group px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 border border-transparent hover:border-blue-500/30"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Create Animation</span>
            </Link>
            <Link
              to="/gallery"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30"
            >
              Pricing
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/get-started"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-bold text-sm text-white hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-gray-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/create"
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Play className="w-4 h-4" />
                <span>Create Animation</span>
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/get-started"
                className="block mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-bold text-base text-white hover:from-blue-700 hover:to-indigo-700 transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}