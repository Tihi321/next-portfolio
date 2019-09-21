import React from 'react';
import uuidv4 from 'uuid/v4';
import Head from '../../../components/Head';
import TitleBar from '../../../components/TitleBar';
import Header from '../../../components/Header';
import Body from '../../../components/Body';
import Card from '../../../components/Card';


import {
  cardContainerClass,
  cardItemClass,
} from './style.scss';

const VideoPage = (props) => {
  const {
    animation,
    description,
    projects,
    lottieLoop,
  } = props;


  const videoElements = projects.map((project) => {
    const link = `/video/${project.slug}`;

    return (
      <div
        key={uuidv4()}
        className={cardItemClass}
      >
        <Card
          link={link}
          image={project.image}
          title={project.title}
        />
      </div>
    );
  });

  return (
    <>
      <Head title="Video Development" />
      <Header
        description={description}
        animation={animation}
        lottieLoop={lottieLoop}
      >
        <TitleBar title="Video Production" />
      </Header>
      <Body>
        <div
          className={cardContainerClass}
        >
          {videoElements}
        </div>
      </Body>
    </>
  );
};

export default VideoPage;
