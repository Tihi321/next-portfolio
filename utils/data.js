import {format} from 'date-fns';
import {generateSlug} from './general';

export function getPageProps(json) {
  return {
    props: json,
    colors: {
      about: json.aboutOptions.aboutAccentColor,
      android: json.androidOptions.androidAccentColor,
      video: json.videoOptions.videoAccentColor,
      web: json.webOptions.webAccentColor,
    },
    menuItems: JSON.parse(json.generalOptions.menuItems),
    date: format(new Date(), 'Y'),
  }
}

export function getProjects(props) {
  const projectsArr = props.videoProjects ? JSON.parse(props.videoProjects) : [];
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

  return [slugs, projects];
}

export function getOptions(route, props, slugs, projects) {
  switch (route) {
  case '/video':
  case '/video/[slug]':
    return {
      props: {...props.videoOptions, projects, slugs},
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