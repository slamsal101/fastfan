import React from 'react';
import { Link } from 'react-router-dom';

const OurVision = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
            Our Vision
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">{'>'}</span>
            <span>About us</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Our Vision</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Believe it or not, copywriting is one of the most important content-creation 
                skills a designer can possess. If you think about it, design exists to support 
                and deliver content—not the other way around.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a designer, content should be the driving force behind many of your decisions, 
                whether you're creating the content or someone else is. So if you can understand 
                how to write effective copy (and understand the purpose that it serves), you'll 
                be able to better serve your clients and ultimately create better designs.
              </p>
            </div>

            {/* Right Image - World Food Day */}
            <div className="relative">
              <img 
                src="/api/placeholder/700/500" 
                alt="World Food Day - Celebrate 4K Around World" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;
