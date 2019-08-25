import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="https://cdn.tihomir-selak.from.hr/assets/portfolio/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="https://cdn.tihomir-selak.from.hr/assets/portfolio/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="https://cdn.tihomir-selak.from.hr/assets/portfolio/favicon.ico" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
