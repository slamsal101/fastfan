import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample news data - in real app, fetch based on ID
  const newsData = {
    1: {
      id: 1,
      title: 'Stone Laying Ceremony Marks Commencement of 132 kV Amarpur-Dhungesanghu',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      author: 'Ian Aikman',
      image: '/api/placeholder/1200/500',
      caption: 'Caption goes here',
      content: `At the start of the eclipse there should be some good clear skies in Mexico but into Texas, Austin and Dallas are looking quite cloudy with an increasing threat of some severe weather.

For eastern areas of Texas severe storms, including tornadoes may actually impact travel here after the eclipse. This does raise the risk of damage to property from high winds and the chance of travel being impacted by the storms.

The eclipse will be ongoing over central areas of Arkansas but by the time totality occurs around 1:50 to 1:55 pm local time there will be quite a bit of cloud moving in.

Rain showers and thunderstorms will be moving through Louisiana, Mississippi, and Alabama ahead of and during the eclipse.`
    },
    2: {
      id: 2,
      title: 'Nepal Introduces New National Food Safety Guidelines',
      date: 'Jun 27, 2020',
      timeAgo: '6 min ago',
      author: 'Jane Smith',
      image: '/api/placeholder/1200/500',
      caption: 'New guidelines for food safety',
      content: 'Detailed content about food safety guidelines...'
    }
  };

  const news = newsData[id] || newsData[1];

  return (
    <div className="min-h-screen bg-white">
      {/* Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/news')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {news.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {/* Date and Time */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                <span>{news.date}</span>
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                <span>{news.timeAgo}</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-2">
                <span className="text-red-600">• By {news.author}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-6">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center text-sm text-gray-500 mt-2 italic">
              {news.caption}
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags or Categories (Optional) */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Food Safety
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                News
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Updates
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;