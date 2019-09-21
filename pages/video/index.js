import React, {useEffect} from 'react';
import VideoPage from './components/page';

const Video = (props) => {
  const {
    videoAnimationFile,
    videoLootieLoop,
    videoDescription,
    openNavCallback,
    projects,
  } = props;

  useEffect(() => {
    openNavCallback(false);
  }, []);

  return (
    <VideoPage
      description={videoDescription}
      animation={videoAnimationFile}
      projects={projects}
      lottieLoop={videoLootieLoop}
    />
  );
};

Video.getInitialProps = async function({client}) {

  // custom api call per page
  const api = await client.fetch('props');

  return {api};
};

export default Video;
