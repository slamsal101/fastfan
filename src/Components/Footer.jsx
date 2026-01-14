import React, { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-[#B5D8AB]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Logo & Description */}
          <div>
            <img
              src="/logo.png"
              alt="FAST-FAN Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-700 max-w-sm mb-4">
              Making the world a better place through constructing elegant hierarchies
            </p>

            <div className="flex gap-4 text-gray-700">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
            </div>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Info</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Home</li>
              <li>Career</li>
              <li>About us</li>
              <li>News</li>
              <li>Blogs</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Subscribe to our newsletter
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              The latest news, articles, and resources, sent to your inbox weekly
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded border border-gray-300 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#25883d] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-green-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-700 pb-6">
        © 2025 FAST-FAN. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
