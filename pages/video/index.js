import React, {useEffect} from 'react';
import uuidv4 from 'uuid/v4';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';
import Body from '../../components/Body';

const Video = (props) => {
  const {
    videoAnimationFile,
    videoDescription,
    videoProjects,
    openNavCallback,
  } = props;

  useEffect(() => {
    openNavCallback(false);
  }, []);


  const projects = videoProjects ? JSON.parse(videoProjects) : [];

  const videoElements = projects.map((project) => {
    const image = JSON.parse(project.image);

    return (
      <a
        key={uuidv4()}
        href={project.link}
      >
        <div style={{backgroundImage: `url(${image.url})`}} />
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
