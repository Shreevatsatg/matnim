import React, { useState } from 'react';
import { Github, Twitter, Mail, Sparkles, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter submission logic
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 to-black text-white w-full mt-auto">
      {/* Animated background elements */}
    
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white/9 backdrop-blur-lg rounded-2xl border border-white/10 p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand and Description */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center mb-4 group">
                <Sparkles className="w-6 h-6 text-blue-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Matnim
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Transforming mathematical storytelling with AI-driven animations for educators, researchers, and creators.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4  bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Explore
              </h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/features"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/documentation"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4  bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Resources
              </h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <a
                    href="/blog"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/tutorials"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="/community"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="hover:text-blue-400 hover:underline transition-all duration-200 transform hover:translate-x-1"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4  bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Stay Connected
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-l-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-all duration-200"
                  aria-label="Email for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-r-xl hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center transition-all duration-200 transform hover:scale-105"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/matnim-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-800/50 rounded-full border border-white/10 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
                  aria-label="Visit Matnim on GitHub"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://twitter.com/matnim_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-gray-800/50 rounded-full border border-white/10 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
                  aria-label="Follow Matnim on Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="mailto:support@matnim.ai"
                  className="group p-2 bg-gray-800/50 rounded-full border border-white/10 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
                  aria-label="Contact Matnim via email"
                >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Matnim - Create Beautiful Animations. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="/terms"
                className="hover:text-blue-400 hover:underline transition-all duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="hover:text-blue-400 hover:underline transition-all duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}