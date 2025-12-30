import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Uniting Voices for a Safer, Stronger Food Future",
      description: "Bringing together producers, distributors, and experts to ensure quality, safety, and innovation across the nation.",
      image: "/s1.jpg"
    },
    {
      title: "Preserving Culinary Heritage",
      description: "Maintaining Nepal's rich food traditions while embracing modern safety standards.",
      image: "/s2.webp"
    },
    {
      title: "Building Trust Through Quality",
      description: "Committed to excellence in food safety and consumer protection.",
      image: "/s3.jpg"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  return (
    <section className="relative h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">

      {/* Background Image with Overlay */}
<div className="absolute inset-0 overflow-hidden">
  <img
    src={slides[currentSlide].image}
    alt=""
    className="w-full h-full object-cover md:object-[center_30%]"
  />
  <div className="absolute inset-0 bg-black/35"></div>
</div>


      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
            {slides[currentSlide].description}
          </p>
          <div className="flex gap-4">
            <button className="bg-[#25883d] hover:bg-[#25883d] text-white px-6 py-3 rounded font-semibold transition transform hover:scale-105">
              Contact Us
            </button>
            <button className="bg-[#FFFFFF20]   hover:bg-opacity-20 text-white  border-[1px] border-white  px-6 py-3 rounded font-semibold backdrop-blur transition">
              Explore more
            </button>
          </div>  
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
  onClick={prevSlide}
  className="absolute left-4 top-1/2 -translate-y-1/2 
             text-white bg-black/40 hover:bg-black/60 
             p-2 transition z-20"
>
  <ChevronLeft size={32} />
</button>

<button
  onClick={nextSlide}
  className="absolute right-4 top-1/2 -translate-y-1/2 
             text-white bg-black/40 hover:bg-black/60 
             p-2 transition z-20"
>
  <ChevronRight size={32} />
</button>

      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;