import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Username</label>
            <input type="text" className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded" />
          </div>
          <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Login</button>
        </form>
        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          Don’t have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;