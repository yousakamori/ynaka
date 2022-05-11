import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { Container } from '@/components/Container';
import { Head } from '@/components/Head';
import { Navigation } from '@/components/Navigation';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { APP_NAME } from '@/lib/constants';
import { Meta } from '@/types/meta';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: Meta;
};

export const Layout: React.FC<LayoutProps> = ({ children, customMeta }) => {
  return (
    <>
      <Head customMeta={customMeta} />

      <header className='h-16'>
        <div className='fixed top-0 left-0 z-40 w-full bg-white shadow dark:bg-black'>
          <Container className='max-w-5xl'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center space-x-4'>
                <Link href='/'>
                  <a className='text-xl font-semibold text-gray-900 dark:text-white'>
                    🙏<span className='hidden ml-2 sm:inline'>{APP_NAME}</span>
                  </a>
                </Link>
                <Navigation />
              </div>
              <ThemeSwitch />
            </div>
          </Container>
        </div>
      </header>

      <main className='py-12'>
        <Container className='max-w-5xl min-h-screen'>{children}</Container>
      </main>
      <footer>
        <Container className='max-w-5xl'>
          <div className='flex justify-center py-8 text-sm'>
            © {format(new Date(), 'yyyy')} {APP_NAME}. All Rights Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
};
