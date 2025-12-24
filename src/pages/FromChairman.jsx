import React from 'react';
import { User } from 'lucide-react';

const FromChairman = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            From Chairman
          </h1>
          <div className="text-center text-gray-600">
            <span>Home</span>
            <span className="mx-2">{'>'}</span>
            <span>About us</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Chairman</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Chairman Photo */}
            <div>
              <img 
                src="/api/placeholder/600/700" 
                alt="Chairman MP. Indra Bahadur Baniya" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            {/* Right - Chairman Message */}
            <div>
              <p className="text-green-600 font-semibold mb-2 uppercase tracking-wide">
                OUR FOUNDER'S VISION
              </p>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                MP. Indra Bahadur Baniya
              </h2>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <User size={18} />
                <span className="text-sm">Founder & Principal Builder</span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Founder MP. Indra Bahadur Baniya highlights the company's journey since 1998, 
                achieved through the dedication of 500+ professionals. Committed to sustainable 
                development and innovation, he extends gratitude to employees and partners for 
                their essential roles in this success.
              </p>

              {/* Quote Section */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600 mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "Over the last 2 decades, BMS has been instrumental in making our country's 
                  infrastructure more efficient through building & integrating townships and 
                  cityscapes."
                </p>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Our Commitment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We are dedicated to advancing food safety standards across Nepal while 
                    preserving our rich culinary heritage and supporting local businesses.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Future Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Building a stronger, safer food industry through collaboration, innovation, 
                    and unwavering commitment to quality and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FromChairman;