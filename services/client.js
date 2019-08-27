import 'isomorphic-fetch';
const https = require('https');

import {getProjects, getPageProps} from '../utils/data';

export class Client {

  requestCache = new Map()

  getWPData = async () => {

    // enable self signed ceriticate api call for development.
    const development = process.env.NEXT_ENV === 'development';
  
    const options = {
      agent: new https.Agent({
        rejectUnauthorized: !development,
      }),
    };
  
    const dataUrl = 'https://blog.tihomir-selak.from.hr/wp-json/portfolio-backend/v1/portfolio-page';
    const response = await fetch(dataUrl, options);
  
    return await response.json();
  }

  cachedFetch = async (param) => {

    const cachedResponse = this.requestCache.get(param);
  
    if (cachedResponse) {
      return cachedResponse;
    }
  
    const json = await this.getWPData();
  
    const data = getPageProps(json);
    const [videoSlugs, videoProjects] = getProjects(data.props.videoOptions);
  
    this.requestCache.set(param, {
      data,
      videoSlugs,
      videoProjects,
    });
  
    return {
      data,
      videoSlugs,
      videoProjects,
    };
  }
  

    getSnapshot() {
      return JSON.stringify([...this.requestCache]);
    }
    
    hydrate(snapshot) {
      this.requestCache = new Map(JSON.parse(snapshot));
    }

  }
