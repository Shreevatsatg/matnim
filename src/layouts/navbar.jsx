import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import { Sparkles, Menu, X, Play, ArrowRight } from "lucide-react";

import {Logout} from"../services/logoutservice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   const { isAuthenticated, setIsAuthenticated  } = useAuth();
   const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
  try {
    const isLogout = await Logout();
    if (isLogout) {
      setIsAuthenticated(false);
      navigate('/login'); // Redirect after logging out
    }
  } catch (err) {
    console.error("Logout error.", err);
  }
};
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl shadow-blue-500/10"
          : "bg-gray-900/80 backdrop-blur-md"
      }`}
    >
      <div className="container  px-28 sm:px-30 lg:px-34">
        <div className="flex items-center justify-between h-20">
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
          <div className="hidden md:flex items-center space-x-1 ">
            
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
              to="/subscription"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300 border border-transparent hover:border-blue-500/30"
            >
              Pricing
            </Link>
            
            {!isAuthenticated &&<Link
              to="/login"
              className="ml-2  px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-bold text-sm text-white hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Log In
            </Link>}

            {isAuthenticated &&<button
            onClick={handleLogout}
              className="ml-2  px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-bold text-sm text-white hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Log out
            </button>}




          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-gray-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              
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
                to="/subscription"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/create"
                className=" flex items-center mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-bold text-base text-white hover:from-blue-700 hover:to-indigo-700 transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started<ArrowRight className="w-3 h-3 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/login"
                className="block mt-2 px-4 py-2 rounded-lg font-bold text-base text-white border border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
