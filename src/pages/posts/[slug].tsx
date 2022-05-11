import { format, parseISO } from 'date-fns';
import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import { FadeInUpContainer } from '@/components/FadeInUpContainer';
import { Layout } from '@/components/Layout';
import { APP_NAME, APP_URL } from '@/lib/constants';
import { getAllPostIds, getPostBySlug } from '@/lib/posts';
import { Meta } from '@/types/meta';
import { Post } from '@/types/post';

type Props = { source: MDXRemoteSerializeResult; frontMatter: Post };

const components: Record<string, any> = {
  Head,
  Image,
  Link,
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, data } = getPostBySlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeCodeTitles,
        require('@mapbox/rehype-prism'),
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

const PostDetailPage: NextPage<Props> = ({ frontMatter, source }) => {
  const customMeta: Meta = {
    title: `${frontMatter.title} - ${APP_NAME}`,
    description: frontMatter.description,
    image: `${APP_URL}/${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta}>
      <FadeInUpContainer>
        <article>
          <time
            dateTime={format(parseISO(frontMatter.date), 'yyyy-MM-dd')}
            className='block mb-3 text-sm text-gray-500 dark:text-gray-400'
          >
            {format(parseISO(frontMatter.date), 'yyyy/MM/dd')}
          </time>
          <h1 className='mb-3 text-gray-900 dark:text-white'>{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className='mb-3 font-semibold'>{frontMatter.description}</p>
          )}
          <div className='mx-auto prose dark:prose-dark max-w-none'>
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </FadeInUpContainer>
    </Layout>
  );
};

export default PostDetailPage;
