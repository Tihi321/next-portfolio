import React from 'react';
import Head from '../../components/Head';
import TitleBar from '../../components/TitleBar';
import Header from '../../components/Header';

const Video = (props) => {
  const {videoAnimationFile, videoDescription} = props;

  return (
    <>
      <Head title="Video Development" />
      <Header description={videoDescription} animation={videoAnimationFile}>
        <TitleBar title="Video Production" />
      </Header>
    </>
  );
};

export default Video;
