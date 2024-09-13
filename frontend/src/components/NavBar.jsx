import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../theme/themeAtom';
import ThemeToggler from '../theme/ThemeToggler';

function NavBar() {
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="w-full px-4 py-2">
      <div className="flex justify-between items-center p-4 mx-4 sm:mx-6 md:mx-16 mt-6 bg-white bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-30 backdrop-blur-md rounded-full border border-gray-300 dark:border-gray-700 shadow-lg transition duration-500 ease-in-out hover:shadow-xl">
        
        {/* Logo */}
        <div className="font-handjet font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
          <h1 className="transition-transform duration-300 ease-in-out transform hover:scale-110">
            Wallet X
          </h1>
        </div>

        {/* Theme Toggler */}
        <div className="flex items-center">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
