import React from 'react';

const CommitmentSection = () => {
  return (
    <section className="py-16 bg-[#F3FAEF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-[#25883d] font-semibold mb-2 uppercase tracking-wide">
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
           
              <img 
                src="/c1.png" 
                alt="Diverse team of food industry professionals" 
                className=" object-cover w-full h-[460px] md:h-[480px]"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default CommitmentSection;