import React from 'react';
import NextHead from 'next/head';
import {string} from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => {
  const title = (props.title) ? `Tihomir Selak Portfolio || ${props.title}` : 'Tihomir Selak Portfolio';

  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    </NextHead>
  );
};

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
