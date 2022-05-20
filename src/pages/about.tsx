import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { FadeInUpContainer } from '@/components/FadeInUpContainer';
import { Layout } from '@/components/Layout';

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
    title: '技術以外',
    list: ['服装自由', 'サクサク動くパソコン（できればMac）'],
  },
];

const skils = [
  {
    name: 'HTML',
    image: 'html.png',
  },
  {
    name: 'React',
    image: 'react.png',
  },
  {
    name: 'Next.js',
    image: 'nextjs.png',
  },
  {
    name: 'Vue.js',
    image: 'vue.png',
  },
  {
    name: 'TypeScript',
    image: 'typescript.png',
  },
  {
    name: 'Ruby on Rails',
    image: 'rails.png',
  },
  {
    name: 'AWS',
    image: 'aws.png',
  },
  {
    name: 'Firebase',
    image: 'firebase.png',
  },
  {
    name: 'Heroku',
    image: 'heroku.png',
  },
  {
    name: 'Circle CI',
    image: 'circleci.jpg',
  },
  {
    name: 'Git',
    image: 'git.png',
  },
];

const AboutPage: NextPage = () => {
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
        <p className='mb-4 text-base'>
          Webエンジニアとして就職したいと思い、このサイトを作成しました。
          <br />
          給与は安くても構わないので、モダンな技術を使っているところで働けたらなと思っています。
        </p>

        <h2 className='mb-2 text-xl'>過去に独学で学習した技術</h2>
        <section className='flex flex-wrap justify-between after:content-[""] after:block after:w-[47%] after:sm:w-[30%] after:md:w-[22%] mb-4'>
          {skils.map((s, k) => (
            <div
              className='w-[47%] sm:w-[30%] md:w-[22%] p-4 bg-white border shadow-md rounded-xl border-black/20 mb-6'
              key={k}
            >
              <div className='flex justify-center'>
                <Image
                  className='object-cover'
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                  alt={s.name}
                  src={`/images/about/${s.image}`}
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <div className='mt-2 text-sm font-semibold text-center text-gray-900'>{s.name}</div>
            </div>
          ))}
        </section>

        <h2 className='mb-2 text-xl'>こんな技術を使ってる会社で働いてみたいです</h2>
        <section className='mb-4'>
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
        </section>
      </FadeInUpContainer>
    </Layout>
  );
};

export default AboutPage;
