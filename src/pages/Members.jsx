import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Members = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  // Sample members data
  const membersData = [
    {
      id: 1,
      restaurantName: "The Wings Factory",
      address: "Mid-baneshwor, Kathmandu",
      phone: "98526341525",
      email: "restaurant@gmail.com",
      owner: "Rupesh NIraula",
      location: "Kathmandu",
      logo: "/api/placeholder/200/200",
      coverImage: "/api/placeholder/1400/400",
      about: "The design, written content, and visual ...",
      socialMedia: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 2,
      restaurantName: "Krishnarpan",
      address: "kalanki, Kathmandu",
      phone: "98526341525",
      email: "restaurant@gmail.com",
      owner: "Ramesh Thapa",
      location: "Kathmandu",
      logo: "/api/placeholder/200/200",
      coverImage: "/api/placeholder/1400/400",
      about: "Experience authentic Nepali cuisine in a traditional setting.",
      socialMedia: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 3,
      restaurantName: "Yangling Tibetan Restaurant",
      address: "Balkumari, lalitpur",
      phone: "98526341525",
      email: "restaurant@gmail.com",
      owner: "Suman Shrestha",
      location: "Lalitpur",
      logo: "/api/placeholder/200/200",
      coverImage: "/api/placeholder/1400/400",
      about: "Authentic Tibetan food and warm hospitality.",
      socialMedia: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 4,
      restaurantName: "The Ship Restaurant Bar & Lounge",
      address: "Radhe Radhe, Bhaktapur",
      phone: "98526341525",
      email: "restaurant@gmail.com",
      owner: "Dipesh Maharjan",
      location: "Bhaktapur",
      logo: "/api/placeholder/200/200",
      coverImage: "/api/placeholder/1400/400",
      about: "Fine dining experiencxe with modern touch ... ",
      socialMedia: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 5,
      restaurantName: "Roadhouse Café",
      address: "Baluwatar, Kathmandu",
      phone: "98526341525",
      email: "restaurant@gmail.com",
      owner: "Kiran Adhikari",
      location: "Kathmandu",
      logo: "/api/placeholder/200/200",
      coverImage: "/api/placeholder/1400/400",
      about: "A cozy cafe with vibrant looks...",
      socialMedia: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
      }
    }
  ];

  // Filter members based on location
  const filteredMembers = activeFilter === 'All' 
    ? membersData 
    : membersData.filter(member => member.location === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleRowClick = (memberId) => {
    navigate(`/members/${memberId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
            Members
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Members</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Buttons and Add New Member */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => handleFilterChange('All')}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeFilter === 'All'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleFilterChange('Kathmandu')}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeFilter === 'Kathmandu'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Kathmandu
              </button>
              <button
                onClick={() => handleFilterChange('Lalitpur')}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeFilter === 'Lalitpur'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Lalitpur
              </button>
              <button
                onClick={() => handleFilterChange('Bhaktapur')}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeFilter === 'Bhaktapur'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Bhaktapur
              </button>
            </div>

            <button className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg hover:bg-green-700 hover:text-white transition font-medium">
              Add New Member
            </button>
          </div>

          {/* Members Table */}
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Restaurant Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Address
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Phone Number
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Email Address
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Owner
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentMembers.map((member) => (
                  <tr 
                    key={member.id} 
                    onClick={() => handleRowClick(member.id)}
                    className="hover:bg-gray-50 transition cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {member.restaurantName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.address}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {member.owner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
            <div className="text-sm text-gray-600">
              {startIndex + 1}-{Math.min(endIndex, filteredMembers.length)} of {filteredMembers.length}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rows per page:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option value={8}>8</option>
                  <option value={16}>16</option>
                  <option value={24}>24</option>
                  <option value={50}>50</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm text-gray-600">
                  {currentPage}/{totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;