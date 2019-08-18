import React from 'react';
import App from 'next/app';
import 'isomorphic-fetch';

import '../skin/styles/_core.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

    const https = require("https");
    
    // enable self signed ceriticate api call for development.
    const development = (process.env.NEXT_ENV === 'development')

    const options = {
      agent: new https.Agent({
        rejectUnauthorized: !development
      })
    };

    let pageProps = {};

    const dataUrl = 'https://blog.tihomir-selak.from.hr/?rest_route=/portfolio-backend/v1/portfolio-page';

    const res = await fetch(dataUrl, options)
    const json = await res.json()
    pageProps.data = json;
    pageProps.env = process.env;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props

    return  <Component {...pageProps} />;
  }
}

export default MyApp;