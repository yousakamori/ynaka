import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import * as gtag from '@/lib/gtag';
import { Post } from '@/types/post';

export const Card: React.FC<Post> = ({
  slug,
  title,
  date,
  description,
  image,
  websiteLink,
  githubLink,
}) => {
  const handleClickLink = () => {
    gtag.event({
      action: 'click',
      category: 'other',
      label: title,
    });
  };
  return (
    <article>
      {image && (
        <Link href={`/posts/${slug}`}>
          <a
            onClick={handleClickLink}
            className='flex mb-3 overflow-hidden border shadow border-black/10 rounded-xl'
          >
            <Image
              className='object-cover'
              style={{ imageRendering: '-webkit-optimize-contrast' }}
              alt=''
              src={image}
              width={520}
              height={320}
              priority
            />
          </a>
        </Link>
      )}
      <div className='flex items-center justify-between'>
        <h2 className='mb-2 text-xl'>
          <Link href={`/posts/${slug}`}>
            <a onClick={handleClickLink} className='text-gray-900 dark:text-white'>
              {title}
            </a>
          </Link>
        </h2>

        <div className='flex items-center space-x-5'>
          {websiteLink && (
            <a
              href={websiteLink}
              target='_blank'
              rel='nofollow noopener noreferrer'
              className='w-6 h-6 text-xl text-gray-900 dark:text-white'
            >
              <BiLink />
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target='_blank'
              rel='nofollow noopener noreferrer'
              className='w-6 h-6 text-xl text-gray-900 dark:text-white'
            >
              <BsGithub />
            </a>
          )}
        </div>
      </div>

      <Link href={`/posts/${slug}`}>
        <a onClick={handleClickLink} className='block mb-2 text-gray-900 dark:text-white'>
          {description}
        </a>
      </Link>

      <time
        dateTime={format(parseISO(date), 'yyyy-MM-dd')}
        className='mb-1 text-sm text-gray-500 dark:text-gray-400'
      >
        {format(parseISO(date), 'yyyy/MM/dd')}
      </time>
    </article>
  );
};
