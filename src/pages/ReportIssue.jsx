import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Issue reported:', formData);
    alert('Thank you for reporting the issue! We will investigate and get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Report an Issue
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Report an Issue</span>
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Form Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Report a Problem or Concern
            </h2>
            <p className="text-gray-600">
              Help us improve by reporting any issues you've encountered
            </p>
          </div>

          {/* Report Form */}
          <div className="bg-white rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98526352547"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Type
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select issue type</option>
                    <option value="Food Safety">Food Safety Concern</option>
                    <option value="Quality">Quality Issue</option>
                    <option value="Service">Service Complaint</option>
                    <option value="Hygiene">Hygiene Problem</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe the Issue
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide detailed information about the issue..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">What happens next?</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Your report will be reviewed by our team within 24-48 hours</li>
              <li>• We will contact you via email or phone for any clarifications</li>
              <li>• Appropriate action will be taken based on the severity of the issue</li>
              <li>• You will be notified about the resolution</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportIssue;