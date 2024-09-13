import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        
        {/* Main Card */}
        <div className="bg-white bg-opacity-60 dark:bg-opacity-30 backdrop-blur-md shadow-lg rounded-xl p-12 max-w-2xl w-full text-center transform transition duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
            Cashless is the Future.
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
            Experience seamless and secure payments with ease.
          </p>
          
          {/* Get Started Button */}
          <Link
            to="/signup"
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Get Started
          </Link>
        </div>

        {/* Footer or Credits */}
        <div className="mt-10 text-center text-white dark:text-gray-400 text-sm">
          © 2024 Cashless Co. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Home;
