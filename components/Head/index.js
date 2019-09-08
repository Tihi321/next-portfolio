import React from 'react';
import NextHead from 'next/head';
import {string} from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => {
  const {
    title,
    description,
    url,
    ogImage,
    favicon,
    logo,
  } = props;
  const pageTitle = (title) ? `Tihomir Selak Portfolio || ${title}` : 'Tihomir Selak Portfolio';

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={url || defaultOGURL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:image" content={ogImage || defaultOGImage} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:site" content={url || defaultOGURL} />
      <meta name="twitter:image" content={ogImage || defaultOGImage} />

      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />

      <meta name="format-detection" content="telephone=no" />

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//ajax.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      <meta name="theme-color" content="#900000" />

      <meta name="application-name" content={pageTitle} />
      <meta name="msapplication-TileColor" content="#900000" />

      <meta name="apple-mobile-web-app-title" content={pageTitle} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#C3151B" />
      <link rel="apple-touch-startup-image" href={logo} />
      <link rel="shortcut icon" href={favicon} />
    </NextHead>
  );
};

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  favicon: string,
  logo: string,
};

Head.defaultProps = {
  title: '',
  description: 'Tihomir Selak portfolio site',
  url: '',
  ogImage: '',
  favicon: '',
  logo: '',
};

export default Head;
