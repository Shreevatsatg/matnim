import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    
      <nav className="bg-gray-800 shadow-md w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-indigo-500 hover:text-3xl">Visualixir</span>
              </Link>
            </div>
            <div className="flex">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/create" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Create Animation
                </Link>
                <Link 
                  to="/gallery" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Gallery
                </Link>
                <Link 
                  to="/about" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      )
    }