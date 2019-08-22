import React from 'react';
import App from 'next/app';
import 'isomorphic-fetch';
import { format } from 'date-fns'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

    const pageProps = {};

    const dataUrl = 'https://blog.tihomir-selak.from.hr/wp-json/portfolio-backend/v1/portfolio-page';

    const res = await fetch(dataUrl, options);
    const json = await res.json();

    pageProps.props = json;
    pageProps.colors = {
      about: json.aboutOptions.aboutAccentColor,
      android: json.androidOptions.androidAccentColor,
      video: json.videoOptions.videoAccentColor,
      web: json.webOptions.webAccentColor,
    };
    pageProps.menuItems = JSON.parse(json.generalOptions.menuItems);
    pageProps.date = format(new Date(), 'Y');
    return { pageProps };
  }

  getColor(path, props) {

    switch (path) {
      case '/video':
        return {
          props: props.videoOptions,
          color: props.videoOptions.videoAccentColor,
        };

      case '/android':
        return {
          props: props.androidOptions,
          color: props.androidOptions.androidAccentColor,
        };

      case '/web':
        return {
          props: props.webOptions,
          color: props.webOptions.webAccentColor,
        };
    
      default:
        return {
          props: props.aboutOptions,
          color: props.aboutOptions.aboutAccentColor,
        };
    }
  }

  render() {
    const { Component, pageProps, router: { asPath } } = this.props;

    const options = this.getColor(asPath, pageProps.props);

    return <>
      <style jsx global>{`
        :root {
          --accent-color: ${options.color};
        }
      `}</style>
      <Navbar
        asPath={asPath}
        colors={pageProps.colors}
        menuItems={pageProps.menuItems}
        options={pageProps.props.generalOptions}
      />
      <Component {...options.props} />
      <Footer
        date={pageProps.date}
        options={pageProps.generalOptions}
      />
    </>;
  }
}

export default MyApp;