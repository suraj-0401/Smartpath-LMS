import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="https://smartpath.co.in/logo.png" alt="Logo" className="w-12.2 h-10 rounded-full" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <a href="#about" className="text-gray-700 hover:text-[#00BFB3]">About Us</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFB3] transition-all group-hover:w-full"></span>
            </div>
            <div className="relative group">
              <a href="#products" className="text-gray-700 hover:text-[#00BFB3]">Our Products</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFB3] transition-all group-hover:w-full"></span>
            </div>
            <a href="#blogs" className="text-gray-700 hover:text-[#00BFB3]">Blogs</a>
            <a href="#contact" className="text-gray-700 hover:text-[#00BFB3]">Contact Us</a>
            <a href="#support" className="text-gray-700 hover:text-[#00BFB3]">Support & Services</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#00BFB3]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#00BFB3]">About Us</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-[#00BFB3]">Our Products</a>
              <a href="#blogs" className="block px-3 py-2 text-gray-700 hover:text-[#00BFB3]">Blogs</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#00BFB3]">Contact Us</a>
              <a href="#support" className="block px-3 py-2 text-gray-700 hover:text-[#00BFB3]">Support & Services</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;