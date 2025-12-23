import React from 'react';

const CommitmentSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-green-600 font-semibold mb-2 uppercase tracking-wide">
              Our Commitment
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-gray-800">
              The company's dedication to innovation, sustainability, safety, and 
              creating a lasting legacy in the construction industry. Deliver 
              exceptional construction services with a focus on quality craftsmanship, 
              timely execution, and innovative solutions.
            </h2>
          </div>
          
          {/* Image with Gradient Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-yellow-200 to-orange-200 rounded-[3rem] transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 rounded-[3rem] p-8 overflow-hidden">
              <img 
                src="/c1.png" 
                alt="Diverse team of food industry professionals" 
                className="rounded-[2rem] w-full h-[260px] md:h-[320px] object-cover shadow-xl hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;