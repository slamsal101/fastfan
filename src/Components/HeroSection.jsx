import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getBanners } from "../../apis/publicApi";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data?.data?.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + data?.data?.length) % data?.data?.length,
    );
  };

  const [data, setData] = useState(null);
  const getData = async () => {
    const data = await getBanners();

    if (data) {
      setData(data);
    } else {
      setData(null);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log({ data });

  return (
    <section className="relative h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">
      {data?.data?.map((item) => (
        <div>
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={item?.image}
              alt=""
              className="w-full h-full object-cover md:object-[center_30%]"
            />
            <div className="absolute inset-0 bg-black/35"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {item?.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
                  {item?.description}{" "}
                </p>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <button className="bg-[#25883d] text-white px-6 py-3 rounded font-semibold transition transform hover:scale-105">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
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
        {data?.data?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
