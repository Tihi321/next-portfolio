import 'isomorphic-fetch';

import {getProjects, getPageProps} from '../utils/data';

export class Client {
  constructor(api) {

    this.api = api;

    this.requestCache = new Map()

  }

  getWPData = async () => {
  
    const response = await fetch(this.api);
  
    return await response.json();
  }

  fetch = async (param) => {

    const cachedResponse = this.requestCache.get(param);
  
    if (cachedResponse) {
      return cachedResponse;
    }
  
    const json = await this.getWPData();
  
    // get properties from json.
    const data = getPageProps(json);
    const [videoSlugs, videoProjects] = getProjects(data.props.videoOptions);
  
    // this will be set to window, and used after first load by react on client.
    this.requestCache.set(param, {
      data,
      videoSlugs,
      videoProjects,
    });
  
    // this will be used to generate first load html by nextjs
    return {
      data,
      videoSlugs,
      videoProjects,
    };
  }
  

  get snapshot() {
    return JSON.stringify([...this.requestCache]);
  }
  
  // return cached data.
  hydrate(snapshot) {
    this.requestCache = new Map(JSON.parse(snapshot));
  }

}
