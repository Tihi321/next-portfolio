import React from 'react';

import {
  listItemClass,
  projectTitleClass,
  prijectDescriptionClass,
} from './style.scss';


const ListItem = ({project}) => {
  const {
    title,
    link,
    description,
  } = project;

  return (
    <li className={listItemClass}>
      <a
        href={link}
      >
        <h2
          className={projectTitleClass}
        >
          {title}
        </h2>
      </a>
      <div
        dangerouslySetInnerHTML={{__html: description}}
        className={prijectDescriptionClass}
      />
    </li>
  );
};

export default ListItem;
