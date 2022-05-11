import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/lib/constants';
import { Meta } from '@/types/meta';

export const Head: React.FC<{ customMeta?: Meta }> = ({ customMeta }) => {
  const router = useRouter();
  const meta: Meta = {
    title: `${APP_NAME} - portfolio`,
    description: APP_DESCRIPTION,
    image: `${APP_URL}/images/ogp-image.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${APP_URL}${router.asPath}`} />
      <link rel='canonical' href={`${APP_URL}${router.asPath}`} />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🙏</text></svg>'
      />
      <link
        rel='icon alternate'
        type='image/png'
        href='https://twemoji.maxcdn.com/v/14.0.2/72x72/1f64f.png'
      />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@huntarosan' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && <meta property='article:published_time' content={meta.date} />}
    </NextHead>
  );
};
