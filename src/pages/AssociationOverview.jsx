import React from 'react';
import { Link } from 'react-router-dom';

const AssociationOverview = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
            Association Overview
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">{'>'}</span>
            <span>About us</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Introduction</span>
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
                Introduction
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Believe it or not, copywriting is one of the most important content-creation 
                skills a designer can possess. If you think about it, design exists to support 
                and deliver content—not the other way around.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a designer, content should be the driving force behind many of your decisions, 
                whether you're creating the content or someone else is. So if you can understand 
                how to write effective copy (and understand the purpose that it serves), you'll 
                be able to better serve your clients and ultimately create better designs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this article, we'll cover some helpful copywriting tips for designers to help 
                you build better experiences. You're creating the content or someone else is. So 
                if you can understand how to write effective copy (and understand the purpose that 
                it serves), you'll be able to better serve your clients and ultimately create 
                better designs.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <img 
                src="/api/placeholder/600/700" 
                alt="FAST-FAN Association Group Photo" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssociationOverview;