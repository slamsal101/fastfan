import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const newsArticles = [
    {
      title: "Nepal Introduces New National Food Safety Standards",
      excerpt: "In this article, I won't talk about the general concepts of typography, which can be used both in print...",
      date: "Jun 27, 2020",
      timeAgo: "6 min ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "This is a big step toward building consumer trust and supporting exports.",
      excerpt: "In this article, I won't talk about the general concepts of typography, which can be used both in print...",
      date: "Jun 27, 2020",
      timeAgo: "6 min ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Our goal is to align Nepal's food safety regulations with international standards",
      excerpt: "In this article, I won't talk about the general concepts of typography, which can be used both in print...",
      date: "Jun 27, 2020",
      timeAgo: "6 min ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Food Industry Leaders Meet to Discuss Quality Standards",
      excerpt: "In this article, I won't talk about the general concepts of typography, which can be used both in print...",
      date: "Jun 28, 2020",
      timeAgo: "1 day ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "New Certification Program Launched for Food Businesses",
      excerpt: "In this article, I won't talk about the general concepts of typography, which can be used both in print...",
      date: "Jun 29, 2020",
      timeAgo: "2 days ago",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Workshop on Sustainable Food Production Practices",
      excerpt: "In this article, I won't talk about the general concepts of typography, which can be used both in print...",
      date: "Jun 30, 2020",
      timeAgo: "3 days ago",
      image: "/api/placeholder/400/250"
    }
  ];
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsArticles.length / itemsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const currentArticles = newsArticles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  return (
    <section className="py-16 bg-white" id="news">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold mb-2 uppercase tracking-wide">
            Our News
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore our <span className="text-green-600">latest News</span>
          </h2>
        </div>
        
        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {currentArticles.map((article, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{article.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={prevPage}
            className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentPage === index 
                    ? 'bg-green-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextPage}
            className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;