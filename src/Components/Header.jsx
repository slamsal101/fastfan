import React, { useState, useRef, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <Facebook size={18} className="cursor-pointer hover:opacity-80" />
            <Twitter size={18} className="cursor-pointer hover:opacity-80" />
            <Instagram size={18} className="cursor-pointer hover:opacity-80" />
          </div>
          <div className="hidden md:flex gap-4">
            <span>📞 985868569, 98552896</span>
            <span>✉️ foodassociationnepal@gmail.com</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">FF</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-700">FAST-FAN</div>
              <div className="text-xs text-gray-600">Fastfood Association Nepal</div>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Navigation Links */}
          <ul className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none z-40`}>
            <li>
              <a href="/" className="hover:text-green-700 transition font-medium">
                Home
              </a>
            </li>
            
            {/* About Us Dropdown */}
            <li 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="flex items-center gap-1 text-green-700 font-semibold border-b-2 border-green-700 pb-1 hover:text-green-800 transition"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                About Us
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`${
                  isAboutDropdownOpen ? 'block' : 'hidden'
                } absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-56 z-50`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href="/about/overview" 
                  className="block px-4 py-3 hover:bg-green-50 hover:text-green-700 transition"
                >
                  Association Overview
                </a>
                <a 
                  href="/about/vision" 
                  className="block px-4 py-3 hover:bg-green-50 hover:text-green-700 transition"
                >
                  Our Vision
                </a>
                <a 
                  href="/about/chairman" 
                  className="block px-4 py-3 hover:bg-green-50 hover:text-green-700 transition"
                >
                  From Chairman
                </a>
              </div>
            </li>
            
            <li>
              <a href="/committee" className="hover:text-green-700 transition font-medium">
                Our Committee
              </a>
            </li>
            <li>
              <a href="/members" className="hover:text-green-700 transition font-medium">
                Members
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-green-700 transition font-medium">
                News & Notices
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-green-700 transition font-medium">
                Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-700 transition font-medium">
                Contact Us
              </a>
            </li>
          </ul>
          
          {/* Report Button */}
          <button className="hidden md:block border-2 border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white transition">
            Report an Issue
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;