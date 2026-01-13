import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(2);
  const [sortBy, setSortBy] = useState('Latest');

  // Sample events data
  const eventsData = [
    {
      id: 1,
      day: 'TUE',
      date: '2',
      title: 'The UN General Assembly had passed the motion in 1981 to mark the International Day.....',
      month: 'Baisakh, 2021',
      link: '/events/1'
    },
    {
      id: 2,
      day: 'WED',
      date: '2',
      title: 'The UN General Assembly had passed the motion in 1981 to mark the International Day.....',
      month: 'Baisakh, 2021',
      link: '/events/2'
    },
    {
      id: 3,
      day: 'WED',
      date: '2',
      title: 'The UN General Assembly had passed the motion in 1981 to mark the International Day.....',
      month: 'Baisakh, 2021',
      link: '/events/3'
    },
    {
      id: 4,
      day: 'WED',
      date: '2',
      title: 'The UN General Assembly had passed the motion in 1981 to mark the International Day.....',
      month: 'Baisakh, 2021',
      link: '/events/4'
    },
    {
      id: 5,
      day: 'THR',
      date: '3',
      title: 'The UN General Assembly had passed the motion in 1981 to mark the International Day.....',
      month: 'Baisakh, 2021',
      link: '/events/5'
    }
  ];

  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
            Events
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Events</span>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header with Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Our Latest Events</h2>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-gray-300 rounded-lg px-6 py-2 pr-10 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="Popular">Popular</option>
              </select>
              <ChevronRight 
                size={20} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-500 pointer-events-none"
              />
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {eventsData.map((event) => (
              <div
                key={event.id}
                onClick={() => handleEventClick(event.id)}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex gap-6 items-start">
                  {/* Date Box */}
                  <div className="shrink-0 text-center">
                    <div className="text-sm font-semibold text-gray-600 uppercase">
                      {event.day}
                    </div>
                    <div className="text-4xl font-bold text-gray-800 my-1">
                      {event.date}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      {event.title}
                      <span className="text-blue-600 hover:text-blue-800 ml-1 font-medium">
                        see more
                      </span>
                    </p>
                    <p className="text-orange-600 font-semibold text-sm">
                      {event.month}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={18} />
              <span>Back</span>
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded transition ${
                    currentPage === page
                      ? 'bg-green-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;