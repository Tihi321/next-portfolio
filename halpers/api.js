import 'isomorphic-fetch';
const https = require('https');

import {getPageProps, getProjects} from './data';

export async function getWPData() {

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

const requestCache = new Map()

export async function cachedFetch(param) {

  const cachedResponse = requestCache.get(param);

  if (cachedResponse) {
    return cachedResponse;
  }

  const json = await getWPData();

  const data = getPageProps(json);
  const [videoSlugs, videoProjects] = getProjects(data.props.videoOptions);

  requestCache.set(param, {
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