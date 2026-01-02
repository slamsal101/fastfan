import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OurCommittee = () => {
  const [activeYear, setActiveYear] = useState('2078-2080-current');

  // Committee data organized by year
  const committeeData = {
    '2078-2080-current': [
      {
        id: 1,
        name: 'MP. Indra Bahadur',
        position: 'Founder & Principal Builder',
        image: '/api/placeholder/400/400',
      },
      {
        id: 2,
        name: 'Lal Singh',
        position: 'Member',
        image: '/api/placeholder/400/400',
      },
      {
        id: 3,
        name: 'Ram Thapa',
        position: 'Member',
        image: '/api/placeholder/400/400',
      },
      {
        id: 4,
        name: 'Albert Flores',
        position: 'Member',
        image: '/api/placeholder/400/400',
      },
      {
        id: 5,
        name: 'Maya Kumari',
        position: 'Member',
        image: '/api/placeholder/400/400',
      },
      {
        id: 6,
        name: 'Ronald Richards',
        position: 'Member',
        image: '/api/placeholder/400/400',
      },
      {
        id: 7,
        name: 'Guy Hawkins',
        position: 'Member',
        image: '/api/placeholder/400/400',
      },
      {
        id: 8,
        name: 'Brooklyn Simmons',
        position: 'Member',
        image: '/api/placeholder/400/400',
      },
    ],
    '2078-2080-previous': [
      {
        id: 1,
        name: 'Previous Member 1',
        position: 'Chairman',
        image: '/api/placeholder/400/400',
      },
      {
        id: 2,
        name: 'Previous Member 2',
        position: 'Vice Chairman',
        image: '/api/placeholder/400/400',
      },
    ],
    '2074-2077': [
      {
        id: 1,
        name: 'Previous Member 3',
        position: 'Chairman',
        image: '/api/placeholder/400/400',
      },
    ],
    '2071-2073': [
      {
        id: 1,
        name: 'Previous Member 4',
        position: 'Chairman',
        image: '/api/placeholder/400/400',
      },
    ],
    '2068-2070': [
      {
        id: 1,
        name: 'Previous Member 5',
        position: 'Chairman',
        image: '/api/placeholder/400/400',
      },
    ],
    '2064-2067': [
      {
        id: 1,
        name: 'Previous Member 6',
        position: 'Chairman',
        image: '/api/placeholder/400/400',
      },
    ],
    '2060-2063': [
      {
        id: 1,
        name: 'Previous Member 7',
        position: 'Chairman',
        image: '/api/placeholder/400/400',
      },
    ],
  };

  const yearButtons = [
    { key: '2078-2080-current', label: '2078 - 2080' },
    { key: '2078-2080-previous', label: '2078 - 2080' },
    { key: '2074-2077', label: '2074 - 2077' },
    { key: '2071-2073', label: '2071 - 2073' },
    { key: '2068-2070', label: '2068 - 2070' },
    { key: '2064-2067', label: '2064 - 2067' },
    { key: '2060-2063', label: '2060 - 2063' },
  ];

  const currentCommittee = committeeData[activeYear] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Committee
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Our Committee</span>
          </div>
        </div>
      </section>

      {/* Committee Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Year Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {yearButtons.map((year) => (
              <button
                key={year.key}
                onClick={() => setActiveYear(year.key)}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  activeYear === year.key
                    ? 'bg-green-500 text-white border-2 border-green-500'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-500 hover:text-green-600'
                }`}
              >
                {year.label}
              </button>
            ))}
          </div>

          {/* Committee Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentCommittee.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center"
              >
                {/* Member Card */}
                <div className="w-full max-w-[260px] p-4 bg-white">
                  {/* Member Image */}
                  <div className="relative h-56 overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Member Info - Below Image */}
                  <div className=" mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 ">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {currentCommittee.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No committee members found for this date..period.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OurCommittee;