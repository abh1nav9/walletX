import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import { themeState } from './theme/themeAtom'; 

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Wallet from './components/Wallet';

import './index.css';

const App = () => {
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    
  );
};

export default App;
