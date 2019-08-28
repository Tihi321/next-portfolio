import 'isomorphic-fetch';
const https = require('https');

import {getProjects, getPageProps} from '../utils/data';

export class Client {
  constructor(api, development) {

    this.api = api;
    this.development = development;

    this.requestCache = new Map()

  }

  getWPData = async () => {
  
    const options = {
      agent: new https.Agent({
        rejectUnauthorized: !this.development,
      }),
    };
  
    const response = await fetch(this.api, options);
  
    return await response.json();
  }

  fetch = async (param) => {

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
  

  get snapshot() {
    return JSON.stringify([...this.requestCache]);
  }
  
  hydrate(snapshot) {
    this.requestCache = new Map(JSON.parse(snapshot));
  }

}
