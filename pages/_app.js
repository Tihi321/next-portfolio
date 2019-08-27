import React from 'react';
import App from 'next/app';
import 'isomorphic-fetch';
import {getOrCreateClient} from '../services';
import {Client} from '../services/client';
import {getOptions} from '../utils/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './_app.scss';

class MyApp extends App {
  constructor(props) {
    super(props);

    const client = new Client();
    client.hydrate(props.snapshot);

    this.state = {
      navIsOpen: false,
    }
  }

  static async getInitialProps({ Component, ctx }) {

    let api = {};
    const client = getOrCreateClient();

    if (Component.getInitialProps) {
      const pageCtx = { ...ctx, client };  
      api = await Component.getInitialProps(pageCtx);
    }

    return {
      ...api,
      snapshot: client.getSnapshot(),
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
      api: {
        data,
        videoSlugs,
        videoProjects,
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
