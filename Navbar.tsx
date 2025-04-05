import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
              Crew Digital
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="text-gray-300 hover:text-cyan-500 transition-colors">সেবাসমূহ</Link>
            <Link to="/tools" className="text-gray-300 hover:text-cyan-500 transition-colors">টুলস</Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-cyan-500 transition-colors">পোর্টফোলিও</Link>
            <Link to="/subscriptions" className="text-gray-300 hover:text-cyan-500 transition-colors">সাবস্ক্রিপশন</Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-500 transition-colors">আমাদের সম্পর্কে</Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-500 transition-colors">যোগাযোগ</Link>
            <Link to="/affiliate" className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90 transition-opacity">
              অ্যাফিলিয়েট প্রোগ্রাম
            </Link>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">সেবাসমূহ</Link>
              <Link to="/tools" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">টুলস</Link>
              <Link to="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">পোর্টফোলিও</Link>
              <Link to="/subscriptions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">সাবস্ক্রিপশন</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">আমাদের সম্পর্কে</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">যোগাযোগ</Link>
              <Link to="/affiliate" className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-500 text-white">অ্যাফিলিয়েট প্রোগ্রাম</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;