import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample event data - in real app, fetch based on ID
  const eventsData = {
    1: {
      id: 1,
      title: 'Table Tennis Rules Assignment',
      time: '9:00am - 11:00am',
      location: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
      venue: 'Thornridge Cir. Shiloh',
      date: '22 Dec, 2023',
      image: '/api/placeholder/600/400',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    2: {
      id: 2,
      title: 'Food Safety Workshop',
      time: '10:00am - 2:00pm',
      location: 'Community Hall, Kathmandu',
      venue: 'Community Hall',
      date: '2 Baisakh, 2021',
      image: '/api/placeholder/600/400',
      description: 'Join us for an informative workshop on food safety standards and best practices for restaurant management.'
    }
  };

  const event = eventsData[id] || eventsData[1];

  return (
    <div className="min-h-screen bg-white">
      {/* Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/events')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          {/* Event Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Event Image */}
            <div>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Right - Event Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                {event.title}
              </h1>

              {/* Time */}
              <div className="flex items-start gap-3 mb-4">
                <Clock size={20} className="text-gray-600 mt-1 shrink-0" />
                <p className="text-gray-700">{event.time}</p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 mb-6">
                <MapPin size={20} className="text-gray-600 mt-1 shrink-0" />
                <p className="text-gray-700">{event.location}</p>
              </div>

              {/* Venue and Date */}
              <div className="space-y-3 mb-6">
                <div className="flex gap-2">
                  <span className="font-semibold text-gray-800">Venue :</span>
                  <span className="text-gray-700">{event.venue}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-gray-800">Date :</span>
                  <span className="text-gray-700">{event.date}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;