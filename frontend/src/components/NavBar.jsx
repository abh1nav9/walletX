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
    <div className='flex justify-around p-4'>
      <div className="font-handjet font-extrabold text-4xl text-gray-900 dark:text-white">
        <h1>Wallet X</h1>
      </div>
      <div>
        <ThemeToggler />
      </div>
    </div>
  );
}

export default NavBar;
