import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from './theme/themeAtom';
import NavBar from './components/NavBar';
import './index.css';

const App = () => {
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <NavBar />
    </div>
  );
};

export default App;
