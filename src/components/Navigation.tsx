import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-800 font-semibold text-lg"
            >
              Home
            </Link>
            <Link 
              to="/blog"
              className="text-gray-800 font-semibold text-lg"
            >
              Blog
            </Link>
            
            <Link 
              to="/about"
              className="text-gray-800 font-semibold text-lg"
            >
              About
            </Link>
            <Link 
              to="/services"
              className="text-gray-800 font-semibold text-lg"
            >
              Services
            </Link>
            <Link 
              to="/gallery"
              className="text-gray-800 font-semibold text-lg"
            >
              Gallery
            </Link>
            <Link 
              to="/contact"
              className="text-gray-800 font-semibold text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 