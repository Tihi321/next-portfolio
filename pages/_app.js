import React from 'react';
import App from 'next/app';
import 'isomorphic-fetch';
import {format} from 'date-fns';
import {generateSlug} from '../halpers/general';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './_app.scss';

const https = require('https');

class MyApp extends App {
  state = {
    navIsOpen: false,
    projects: [],
    slugs: [],
  };

  static async getInitialProps() {

    // enable self signed ceriticate api call for development.
    const development = process.env.NEXT_ENV === 'development';

    const options = {
      agent: new https.Agent({
        rejectUnauthorized: !development,
      }),
    };

    const pageProps = {};

    const dataUrl =
      'https://blog.tihomir-selak.from.hr/wp-json/portfolio-backend/v1/portfolio-page';

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
    return {pageProps};
  }

  getOptions(route, props) {
    switch (route) {
    case '/video':
    case '/video/[slug]':
      return {
        props: {...props.videoOptions, projects: this.state.projects, slugs: this.state.slugs},
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

  setNavIsOpen = (val) => {
    this.setState(() => {
      return {
        navIsOpen: val,
      };
    });
  }

  componentDidMount() {
    const {
      pageProps: {
        props: {
          videoOptions: {
            videoProjects,
          },
        },
      },
    } = this.props;

    const projectsArr = videoProjects ? JSON.parse(videoProjects) : [];
    const slugs = [];

    const projects = projectsArr.map((pr) => {

      const slug = generateSlug(pr.title);

      slugs.push(slug);
      return {
        ...pr,
        image: JSON.parse(pr.image),
        slug,
      };
    });

    this.setState(() => {

      return {
        projects,
        slugs,
      };
    });

  }

  render() {
    const {
      Component,
      pageProps,
      router: {route},
    } = this.props;

    const options = this.getOptions(route, pageProps.props);

    return (
      <>
        <style jsx global>
          {`
            :root {
              --accent-color: ${options.color};
            }
          `}
        </style>
        <Navbar
          openNav={this.state.navIsOpen}
          openNavCallback={this.setNavIsOpen}
          colors={pageProps.colors}
          menuItems={pageProps.menuItems}
          options={pageProps.props.generalOptions}
        />
        <Component {...options.props} openNavCallback={this.setNavIsOpen} />
        <Footer
          date={pageProps.date}
          options={pageProps.props.generalOptions}
        />
      </>
    );
  }
}

export default MyApp;
