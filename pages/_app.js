import React from 'react';
import App from 'next/app';
import 'isomorphic-fetch';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const res = await fetch('http://localhost:3000/api/data')
    const json = await res.json()
    pageProps.data = json;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props

    return  <Component {...pageProps} />;
  }
}

export default MyApp;