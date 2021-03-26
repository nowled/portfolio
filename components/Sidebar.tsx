import React, { useEffect } from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BiAtom } from 'react-icons/bi';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changePageTheme = theme === 'dark' ? 'Light Theme' : 'Dark Theme';

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <div>
      <Image
        src='/images/charles.jpg'
        alt='charles'
        width='150px'
        height='150px'
        className='mx-auto border rounded-full'
        quality='100'
      />
      <h1 className='my-4 font-medium tracking-wider text-3x1 font-Kaushan'>
        Charles Peterson
      </h1>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
        Front-End Developer
      </p>
      <a
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
        href='/assets/Charles_P_Resume.pdf'
        download='Charles_P_Resume.pdf'
      >
        <GiTie className='w-6 h-6' />
        Download Resume
      </a>
      {/* social icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a href='https://github.com/nowled'>
          <AiFillGithub className='w-8 h-8' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-8 h-8' />
        </a>
        <a href=''>
          <BiAtom className='w-8 h-8' />
        </a>
      </div>

      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Charles Peterson</span>
        </div>
        <p className='my-2'>devman585@gmail.com</p>
        <p className='my-2'>WhatsApp # +966 59 309 0216</p>
      </div>

      <button
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green dark:bg-dark-200 to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto:devman585@gmail.com')}
      >
        Email Me
      </button>

      <button
        onClick={toggleTheme}
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
      >
        {changePageTheme}
      </button>
    </div>
  );
};

export default Sidebar;
