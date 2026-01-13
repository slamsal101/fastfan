import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

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
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="mb-4">
  <img
    src="/logo.png"
    alt="FAST-FAN Logo"
    className="h-12 w-auto object-contain"
  />
</div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Making the world a better place through constructing elegant hierarchies
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="text-gray-600 hover:text-green-700 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-green-700 transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-green-700 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Info Column */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-600 hover:text-green-700 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#career" className="text-gray-600 hover:text-green-700 transition">
                  Career
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-green-700 transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-green-700 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#news" className="text-gray-600 hover:text-green-700 transition">
                  News
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-600 hover:text-green-700 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-600 hover:text-green-700 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-600 hover:text-green-700 transition">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Subscribe to our newsLetter</h3>
            <p className="text-sm text-gray-600 mb-4">
              The latest news, articles, and resources, sent to your inbox weekly
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              />
              <button 
                type="submit"
                className="bg-[#25883d] hover:bg-green-800 text-white px-6 py-2 rounded font-semibold transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2025 FAST-FAN. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#privacy" className="hover:text-green-700 transition">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-green-700 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
