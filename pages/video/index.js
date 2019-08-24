import React from 'react';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Video = (props) => {
  const {videoAnimationFile, videoDescription, videoProjects} = props;

  const projects = videoProjects ? JSON.parse(videoProjects) : [];

  const videoElements = projects.map((project, id) => {
    const image = JSON.parse(project.image)
    return(
      <a
        key={id}
        href={project.link}
      >
        <div style={{backgroundImage: `url(${image.url})`}}/>
        <h2>{project.title}</h2>
      </a>
    );
  });

  console.log(projects);

  return (
    <>
      <Head title="Video Development" />
      <Header description={videoDescription} animation={videoAnimationFile}>
        <TitleBar title="Video Production" />
      </Header>
      <Body>
        {videoElements}
      </Body>
    </>
  );
};

export default Video;
