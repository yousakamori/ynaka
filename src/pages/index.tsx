import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Card } from '@/components/Card';
import { FadeInUpContainer } from '@/components/FadeInUpContainer';
import { Hero } from '@/components/Hero';
import { Layout } from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import { Post } from '@/types/post';

export const IndexPage: NextPage<{
  posts: Post[];
}> = ({ posts }) => {
  return (
    <Layout>
      <FadeInUpContainer>
        <Hero />
      </FadeInUpContainer>

      <FadeInUpContainer animationDelay='0.4s' className='mt-6'>
        <div className='grid grid-cols-1 gap-12 md:gap-20 md:grid-cols-2'>
          {posts.map((post) => (
            <Card key={post.slug} {...post} />
          ))}
        </div>
      </FadeInUpContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();

  return {
    props: { posts },
  };
};

export default IndexPage;
