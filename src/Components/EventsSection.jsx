import React from 'react';
import { Calendar } from 'lucide-react';

const EventsSection = () => {
  const events = [
    { 
      day: "TUE", 
      date: "2", 
      month: "Baisakh, 2021", 
      description: "The UN General Assembly had passed the motion in 1981 to mark the International Day...",
      link: "#"
    },
    { 
      day: "MON", 
      date: "8", 
      month: "Baisakh, 2021", 
      description: "The UN General Assembly had passed the motion in 1981 to mark the International Day...",
      link: "#"
    },
    { 
      day: "WED", 
      date: "2", 
      month: "Baisakh, 2021", 
      description: "The UN General Assembly had passed the motion in 1981 to mark the International Day...",
      link: "#"
    },
    { 
      day: "THR", 
      date: "2", 
      month: "Baisakh, 2021", 
      description: "The UN General Assembly had passed the motion in 1981 to mark the International Day...",
      link: "#"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" id="events">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#25883D] font-semibold mb-2 uppercase tracking-wide">
            Get Updated About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Events
          </h2>
        </div>
        
        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex gap-4"
            >
              {/* Date Box */}
              <div className="shrink-0 text-center border-r-2 border-gray-200 pr-4">
                <div className="text-sm font-semibold text-gray-600 uppercase">
                  {event.day}
                </div>
                <div className="text-4xl font-bold text-gray-800 my-1">
                  {event.date}
                </div>
                <Calendar size={20} className="mx-auto text-[#25883D]" />
              </div>
              
              {/* Event Details */}
              <div className="flex-1">
                <p className="text-gray-700 mb-2 leading-relaxed">
                  {event.description}
                </p>
                <a 
                  href={event.link} 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  see more
                </a>
                <p className="text-orange-600 font-semibold mt-3 text-sm">
                  {event.month}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Events Button */}
        <div className="text-center mt-10">
          <button className="bg-[#25883D] hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;