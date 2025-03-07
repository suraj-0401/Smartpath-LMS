import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            {['about', 'products', 'blogs', 'contact', 'support'].map((item) => (
              <div className="relative group" key={item}>
                <Link to={`#${item}`} className="text-gray-700 hover:text-[#00BFB3]">
                  {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFB3] transition-all group-hover:w-full"></span>
              </div>
            ))}
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
              {['about', 'products', 'blogs', 'contact', 'support'].map((item) => (
                <div className="relative group" key={item}>
                  <Link to={`#${item}`} className="block px-3 py-2 text-gray-700 hover:text-[#00BFB3]">
                    {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BFB3] transition-all group-hover:w-full"></span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;