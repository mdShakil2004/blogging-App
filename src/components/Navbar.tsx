
import React from 'react';
import { BookOpen, Heart, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              EduHealth Hub
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/category/education" className="flex items-center text-gray-600 hover:text-purple-600">
              <BookOpen className="w-5 h-5 mr-1" />
              <span>Education</span>
            </Link>
            <Link to="/category/health" className="flex items-center text-gray-600 hover:text-green-600">
              <Heart className="w-5 h-5 mr-1" />
              <span>Health</span>
            </Link>
            <Link to="/category/video" className="flex items-center text-gray-600 hover:text-blue-600">
              <Video className="w-5 h-5 mr-1" />
              <span>Video</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
