import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/ab1.jpg" 
                alt="Food service worker" 
                className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="/ab2.webp" 
                alt="Market vendor with fresh produce" 
                className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Content */}
          <div>
            <p className="text-[#25883d] font-semibold mb-2 uppercase tracking-wide">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Want To Know More About{' '}
              <span className="text-[#25883d]">Food Association Nepal</span>
            </h2>
            <p className="text-gray-600 italic mb-4 text-lg">
              Preserving our rich culinary heritage while advancing Nepal's food 
              standards for future generations.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The company prides itself on a team of dedicated professionals, known 
              for their excellence, precision, and adherence to quality and safety 
              standards. They specialize in handling complex operations while 
              maintaining the highest level of service delivery.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;