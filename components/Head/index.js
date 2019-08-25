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
    </NextHead>
  );
};

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

Head.defaultProps = {
  title: '',
  description: 'Tihomir Selak portfolio site',
  url: '',
  ogImage: '',
};

export default Head;
