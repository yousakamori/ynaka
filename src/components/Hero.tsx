import React from 'react';
import styles from './Hero.module.css';
import { EmojiOrTwemoji } from '@/components/EmojiOrTwemoji';
import { APP_NAME } from '@/lib/constants';

export const Hero: React.FC = () => {
  return (
    <div className='relative max-w-5xl  min-h-[70vh]'>
      <div className='absolute w-full h-full'>
        <div className='absolute z-20 w-full text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
          <p className='flex justify-center text-6xl'>
            <EmojiOrTwemoji emoji='🙏' />
          </p>
          <h1 className='my-3 text-5xl font-bold tracking-wider text-gray-900 dark:text-white'>
            {APP_NAME}
          </h1>
          <p className='text-4xl font-semibold text-gray-900/80 dark:text-white/80'>portfolio</p>
        </div>

        <ul className={styles.bubble}>
          {[...Array(15).keys()].map((k) => (
            <li
              key={k}
              className='absolute border-2 border-gray-300 rounded-full dark:border-white/80 h-14 w-14'
            >
              <span className='absolute w-2 h-2 rounded-full bg-gray-300/80 dark:bg-white/60 top-1/4 left-1/4'></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
