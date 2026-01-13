import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsNotices = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(2);
  const [sortBy, setSortBy] = useState('Latest');

  // Sample news data
  const newsData = [
    {
      id: 1,
      title: 'Nepal Introduces New National Food Safety Guidelines',
      excerpt: 'In this article, I won\'t talk about the general concepts of typography, which can be used both in print...',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'This is a big step toward building consumer trust and supporting exports.',
      excerpt: 'In this article, I won\'t talk about the general concepts of typography, which can be used both in print...',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Our goal is to align Nepal\'s food safety regulations with international standards',
      excerpt: 'In this article, I won\'t talk about the general concepts of typography, which can be used both in print...',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet consectetur. Cras dapibus platea tincidunt feugiat.',
      excerpt: 'In this article, I won\'t talk about the general concepts of typography, which can be used both in print...',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet consectetur. Porttitor in eget non urna fermentum',
      excerpt: 'In this article, I won\'t talk about the general concepts of typography, which can be used both in print...',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet consectetur. At nunc nunc aliquam turpis aliquet a.',
      excerpt: 'In this article, I won\'t talk about the general concepts of typography, which can be used both in print...',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      image: '/api/placeholder/400/300'
    }
  ];

  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
            News & Notices
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">News & Notices</span>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header with Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Our Latest News</h2>
            
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

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsData.map((news) => (
              <div
                key={news.id}
                onClick={() => handleNewsClick(news.id)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* News Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* News Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  {/* Date and Time */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>{news.date}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>{news.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
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

export default NewsNotices;