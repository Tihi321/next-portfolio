import React from 'react';
import App from 'next/app';
import 'isomorphic-fetch';
import {getOrCreateClient} from '../services';
import {getOptions} from '../utils/data';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './_app.scss';

class MyApp extends App {
  constructor(props) {
    super(props);

    const client = getOrCreateClient();

    // create cached data for frontend.
    client.hydrate(props.snapshot);

    this.state = {
      navIsOpen: false,
    }
  }

  static async getInitialProps({ Component, ctx }) {

    let api = {};
    const client = getOrCreateClient();

    // create get initial props function for component and provide context to it, so this function can be used on every component.
    if (Component.getInitialProps) {
      const pageCtx = { ...ctx, client };  
      api = await Component.getInitialProps(pageCtx);
    }

    return {
      ...api,
      snapshot: client.snapshot,
    };
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
      api,
      router: {route},
    } = this.props;

    if (!api) {
      return '';
    }

    const {
      data: {
        props,
        colors,
        menuItems,
        date,
        assets: {
          logo,
          favicon,
        },
      },
      videoSlugs,
      videoProjects,
    } = api;

    const options = getOptions(route, props, videoSlugs, videoProjects);

    return (
      <>
        <style jsx global>
          {`
            :root {
              --accent-color: ${options.color};
            }
          `}
        </style>
        <Head
          favicon={favicon}
          logo={logo}
        />
        <Navbar
          openNav={this.state.navIsOpen}
          openNavCallback={this.setNavIsOpen}
          colors={colors}
          menuItems={menuItems}
          options={props.generalOptions}
          logo={logo}
        />
        <Component {...options.props} openNavCallback={this.setNavIsOpen} />
        <Footer
          date={date}
          options={props.generalOptions}
        />
      </>
    );
  }
}

export default MyApp;
