import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contactform from '../Components/Contactform';

const ContactUs = () => {
  

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
            Contact Us
          </h1>
          <div className="text-center text-gray-600">
            <Link to="/" className="hover:text-green-700">
              Home
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-green-700 font-semibold">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Form Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Any Queries? Ask Anything!!
            </h2>
          </div>

         <Contactform />

        </div>
      </section>
    </div>
  );
};

export default ContactUs;