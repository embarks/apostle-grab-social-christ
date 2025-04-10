
import React from 'react';
import { Bell, Home, Search, Trophy, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-divine-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-divine-300 flex items-center justify-center divine-glow">
            <span className="text-white font-cinzel font-bold">J</span>
          </div>
          <h1 className="text-xl font-cinzel font-bold text-divine-500">JesusQuest</h1>
        </Link>
        
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search potential apostles..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-divine-200 focus:outline-none focus:ring-2 focus:ring-divine-300"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-divine-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-1 md:space-x-4">
          <Link to="/" className="p-2 rounded-full hover:bg-divine-100">
            <Home className="h-6 w-6 text-divine-500" />
          </Link>
          <Link to="/leaderboard" className="p-2 rounded-full hover:bg-divine-100">
            <Trophy className="h-6 w-6 text-divine-500" />
          </Link>
          <Link to="/notifications" className="p-2 rounded-full hover:bg-divine-100 relative">
            <Bell className="h-6 w-6 text-divine-500" />
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-divine-400 text-white text-xs flex items-center justify-center">
              3
            </span>
          </Link>
          <Link to="/profile" className="relative p-2 rounded-full hover:bg-divine-100">
            <User className="h-6 w-6 text-divine-500" />
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-divine-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
