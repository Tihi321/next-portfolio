import React from 'react';
import App from 'next/app';
import 'isomorphic-fetch';
import {cachedFetch} from '../halpers/api';
import {getOptions} from '../halpers/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './_app.scss';

class MyApp extends App {
  state = {
    navIsOpen: false,
  };

  static async getInitialProps() {

    const api = await cachedFetch('props');

    return {api};
  }

  setNavIsOpen = (val) => {
    this.setState(() => {
      return {
        navIsOpen: val,
      };
    });
  }

  render() {
    const {
      Component,
      api: {
        data,
        videoSlugs,
        videoProjects,
        not,
      },
      router: {route},
    } = this.props;

    const options = getOptions(route, data.props, videoSlugs, videoProjects);

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
          colors={data.colors}
          menuItems={data.menuItems}
          options={data.props.generalOptions}
        />
        <Component {...options.props} openNavCallback={this.setNavIsOpen} />
        <Footer
          date={data.date}
          options={data.props.generalOptions}
        />
      </>
    );
  }
}

export default MyApp;
