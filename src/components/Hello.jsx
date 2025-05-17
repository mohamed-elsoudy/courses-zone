import React from 'react';
import { Link } from 'react-router-dom';

function Hello() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Hello!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Courses Zone, where learning meets opportunity.
        </p>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3">Start Your Learning Journey Today</h2>
          <p className="text-white mb-4">
            Explore our wide range of courses designed to help you achieve your goals.
          </p>
          <Link to="/courses" className="inline-block bg-white text-yellow-500 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hello;
