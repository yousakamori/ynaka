import { NextPage } from 'next';
import React from 'react';
import { FadeInUpContainer } from '@/components/FadeInUpContainer';
import { Layout } from '@/components/Layout';

const AboutPage: NextPage = () => {
  const technologies = [
    {
      title: 'フロントエンド',
      list: ['React(Next.js)', 'Vue(Nuxt.js)'],
    },
    {
      title: 'バックエンド',
      list: ['Rails', 'Laravel', 'NestJS'],
    },
    {
      title: 'インフラ',
      list: ['Docker', 'AWS', 'GCP', 'Firebase'],
    },
    {
      title: 'その他',
      list: ['CircleCI', 'GitHub Actions', 'TDD', 'DDD', 'Clean Architecture'],
    },
    {
      title: '技術じゃないけど',
      list: ['服装自由', 'サクサク動くパソコン（できればMac）'],
    },
  ];
  return (
    <Layout
      customMeta={{
        title: 'About',
      }}
    >
      <FadeInUpContainer className='mt-6'>
        <h1>you nakamura 🙇‍♂️</h1>
      </FadeInUpContainer>

      <FadeInUpContainer animationDelay='0.4s' className='mt-6'>
        <h2 className='mb-4 text-base'>
          Webエンジニアとして就職したいと思い、このサイトを作成しました。
          <br />
          給与は安くても構わないので、以下のようなモダンな技術を使っているところで働けたらなと思っています。
        </h2>

        {technologies.map((t, k) => (
          <div key={k} className='mb-1'>
            <h3 className='text-base font-semibold text-gray-900 dark:text-white'>{t.title}</h3>
            <ul className='flex flex-wrap items-center mb-4 space-x-4 text-gray-600 dark:text-white/90'>
              {t.list.map((l, k) => (
                <li key={k}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </FadeInUpContainer>
    </Layout>
  );
};

export default AboutPage;
