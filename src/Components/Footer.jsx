import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };
  
  return (
    <footer className="bg-[#B5D8AB]">
      <div className="container mx-auto px-34 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-y-8">
          <div>
      
            <img
              src="/logo.png"
              alt="FAST-FAN Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-700 max-w-sm mb-4">
              Making the world a better place through constructing elegant hierarchies
            </p>

            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-green-700 transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-green-700 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-green-700 transition">
                  Home
                </Link>
              </li>
              
              <li>
                <Link to="/about/overview" className="text-gray-600 hover:text-green-700 transition">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-700 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/news" className="text-gray-600 hover:text-green-700 transition">
                  News
                </Link>
              </li>
              
              <li>
                <Link to="/events" className="text-gray-600 hover:text-green-700 transition">
                  Events
                </Link>
              </li>
              
            </ul>
          </div>
          
          
        </div>
      </div>
      
      <div className="border-t border-green-200">
        <div className="container mx-auto px-4 py-4">
           <div className="text-center text-sm text-gray-700 pb-6">
        © 2025 FAST-FAN. All rights reserved
      
            <div className="container mx-auto px-4 py-4">
              <Link to="/contact" className="hover:text-green-700 transition">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-green-700 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;