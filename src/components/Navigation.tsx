import Link from 'next/link';
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className='flex items-center space-x-4'>
      <Link href='/about'>
        <a className='text-gray-900 dark:text-white'>About</a>
      </Link>
      <a
        className='text-gray-900 dark:text-white'
        target='_blank'
        href='https://forms.gle/csLMHRHZTP9d6rPh9'
        rel='noreferrer'
      >
        Contact
      </a>
    </nav>
  );
};
